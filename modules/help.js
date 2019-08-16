function help() {
    console.log("");
    console.log("--------------------------------");
    console.log("");

    // Info for 'movie-this' command
    console.log("movie-this [title]");
    console.log("Return: Movie Title, Release Date, Rating, Runtime, Genre, Director, Actors, Plot, and IMDB ID");

    console.log("");
    console.log("--------------------------------");
    console.log("");

    // Info for 'concert-this' command
    console.log("concert-this [artist]");
    console.log("Return: List of upcoming Locations and Dates");

    console.log("");
    console.log("--------------------------------");
    console.log("");

    // Info for 'spotify-this-song' command
    console.log("spotify-this-song [title]");
    console.log("Return: List of all songs with Title, Album, Artist, Track Length, and Spotify ID");

    console.log("");
    console.log("--------------------------------");
    console.log("");

    // Info for 'do-what-it-says' command
    console.log("do-what-it-says");
    console.log("Return: Result of a random command")

    console.log("");
    console.log("--------------------------------");
    console.log("");
}

module.exports = {
    help: help
};