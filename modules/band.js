// Import console.table
const cTable = require('console.table');

function query(artist) {
    // Check that artist is not empty
    if (artist) {
        // Create query URL
        let queryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

    } else {
        // Print error message
        console.log("The command 'concert-this' requires one argument, none were passed.");
    }
}

module.exports = {
    query: query
}