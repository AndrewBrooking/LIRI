// Import keys
const keys = require("./keys.js");

// Import console.table
const cTable = require('console.table');

function query(title) {
    // Check that title is not empty
    if (title) {
        // TODO
    } else {
        // Print error message
        console.log("The command 'spotify-this-song' requires one argument, none were passed.");
    }
}

module.exports = {
    query: query
};