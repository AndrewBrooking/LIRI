// Import modules
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

// Determine which operation to perform
switch (op) {
    case "movie-this":
        // Query OMDB using a title and print the results to the console
        movie.query(input);
        break;
    case "concert-this":
        // Query Spotify using an artist's name and print the results to the console
        spotify.queryConcert(input);
        break;
    case "spotify-this-song":
        // Query Spotify using a song title and print the results to the console
        spotify.querySong(input);
        break;
    case "do-what-it-says":
        // Flip a coin
        let flip = Math.round(Math.random());

        // If flip = 0 then query OMDB, else query Spotify
        if (flip === 0) {
            movie.query("Star Wars");
        } else {
            // Flip coin again
            flip = Math.round(Math.random());

            // If flip = 0 then query for concerts, else query for a song
            if (flip === 0) {
                spotify.queryConcert("Chvrches");
            } else {
                spotify.querySong("Graffiti");
            }
        }

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