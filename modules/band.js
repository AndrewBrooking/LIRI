// Import console.table
const cTable = require('console.table');

// Import axios
const axios = require("axios");

// Import moment
const moment = require("moment");

// Import error function
const error = require("./error.js");

function query(artist) {
    // Check that artist is not empty
    if (artist) {
        // Create query URL
        let queryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

        // Run axios query
        axios.get(queryURL).then(writeResults).catch(error);
    } else {
        // Print error message
        console.log("The command 'concert-this' requires one argument, none were passed.");
    }
}

function writeResults(response) {
    const data = response.data;

    // Check if there are any events
    if (!data || data.length === 0) {
        return console.log("No upcoming events.")
    }

    // Create output array
    let output = [];

    // Loop through all events
    for (let event of data) {
        // Create and define event object
        let obj = {
            Venue: event.venue.name,
            Location: `${event.venue.city}, ${event.venue.country}`,
            Date: moment(event.datetime, "YYYY-MM-DDTh:mm:ss").format("L")
        };

        // Add event object to output array
        output.push(obj);
    }

    // Write the results
    console.table(output);
}

module.exports = {
    query: query
}