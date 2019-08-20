// Import axios
const axios = require("axios");

// Import error function
const error = require("./error.js");

function query(title) {
    // Check that title is not empty
    if (title) {
        // Create query URL
        let queryURL = `http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=23134811`;

        // Run axios query
        axios.get(queryURL).then(writeResults).catch(error.error);
    } else {
        // Print error message
        console.log("The command 'movie-this' requires one argument, none were passed.");
    }
}

function writeResults(response) {
    const data = response.data;

    console.log("--------------------------------");
    console.log(`Title: ${data.Title}`);
    console.log(`Year: ${data.Year}`);

    for (let rating of data.Ratings) {
        if (rating.Source === "Internet Movie Database") {
            console.log(`IMDB Rating: ${rating.Value}`);
        } else if (rating.Source === "Rotten Tomatoes") {
            console.log(`RT Rating: ${rating.Value}`);
        }
    }
    
    console.log(`Country: ${data.Country}`);
    console.log(`Language: ${data.Language}`);
    console.log(`Plot: ${data.Plot}`);
    console.log(`Actors: ${data.Actors}`);
    console.log("--------------------------------");
}

module.exports = {
    query: query
};