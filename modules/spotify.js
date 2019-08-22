// Import console.table
const cTable = require('console.table');

// Import error function
const error = require("./error.js");

// Import Spotify
const SpotifyAPI = require('node-spotify-api');
 
const spotify = new SpotifyAPI({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

function query(title) {
    // Check that title is not empty
    if (title) {
        spotify.search({ type: 'track', query: title }).then(writeResults).catch(error);
    } else {
        // Print error message
        console.log("The command 'spotify-this-song' requires one argument, none were passed.");
    }
}

function writeResults(response) {
    const data = response.tracks.items;

    // Check if there are any tracks
    if (!data || data.length === 0) {
        return console.log("Could not find any songs with the provided keyword.");
    }

    // Create output array
    let output = [];

    // Loop through all tracks
    for (let track of data) {
        
        let artists = [];

        for (let artist of track.artists) {
            artists.push(artist.name);
        }

        // Create and define track object
        let obj = {
            Artist: artists.join(", ").trim(),
            Track: track.name,
            Album: track.album.name,
            Link: track.external_urls.spotify
        };

        // Add track object to output array
        output.push(obj);
    }

    console.log("--------------------------------");
    console.table(output);
    console.log("--------------------------------");
}

module.exports = {
    query: query
};