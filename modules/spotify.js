function queryConcert(artist) {
    // Check that artist is not empty
    if (artist) {
        // TODO
        console.log("Running command 'concert-this' with title '" + artist + "'");
    } else {
        // Print error message
        console.log("The command 'concert-this' requires one argument, none were passed.");
    }
}

function querySong(title) {
    // Check that title is not empty
    if (title) {
        // TODO
        console.log("Running command 'spotify-this-song' with title '" + title + "'");
    } else {
        // Print error message
        console.log("The command 'spotify-this-song' requires one argument, none were passed.");
    }
}

module.exports = {
    queryConcert: queryConcert,
    querySong: querySong
};