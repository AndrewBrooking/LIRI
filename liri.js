require("dotenv").config();

// Import fs
const fs = require("fs");

// Import modules
let band = require("./modules/band.js")
let movie = require("./modules/movie.js");
let spotify = require("./modules/spotify.js");
let help = require("./modules/help.js");

// Obtain reference to command arguments
const args = process.argv;

// Check that a command was passed, if not print an error to the console
if (args.length <= 2) {
    console.log("Please enter a command to run, type '?' for help.");
    return;
}

// Get operation to perform
const op = args[2].trim().toLowerCase();

// Get input as a single string
const input = args.slice(3).join(' ').trim().toLowerCase();

// Perform random command or specified command
if (op === "do-what-it-says") {
    // Read random.txt
    fs.readFile("random.txt", "utf8", (err, data) => {

        // Check for error
        if (err) {
            return console.log(err);
        }

        // Get array of strings from data
        const strArr = data.split("\n");

        // Create random number between 0 and length of strArr (exclusive)
        const rnd = Math.round(Math.random() * strArr.length);

        // Get index number of first space to separate command from input
        const splitIndex = strArr[rnd].indexOf(" ");

        // Split command and input from random command
        op = strArr[rnd].substr(0, splitIndex).trim();
        input = strArr[rnd].substr(splitIndex + 1).trim();

        liri(op, input);
    });
} else {
    liri(op, input);
}

function liri(command, input) {
    // Determine which operation to perform
    switch (command) {
        case "movie-this":
            // Query OMDB using a title and print the results to the console
            movie.query(input);
            break;
        case "concert-this":
            // Query Bands in Town using an artist's name and print the results to the console
            band.query(input);
            break;
        case "spotify-this-song":
            // Query Spotify using a song title and print the results to the console
            spotify.query(input);
            break;
        case "?":
            // Display help info
            help.help();
            break;
        default:
            // Print error message to console if an unknown command was entered
            console.log("Unknown command (" + op + "), type '?' for help.");
            break;
    }
}