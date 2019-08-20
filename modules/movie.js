function query(title) {
    // Check that title is not empty
    if (title) {
        // TODO
    } else {
        // Print error message
        console.log("The command 'movie-this' requires one argument, none were passed.");
    }
}

module.exports = {
    query: query
};