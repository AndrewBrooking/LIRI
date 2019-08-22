# LIRI (Language Interpretation Recognition Interface)

### About
A Node.JS command line application similar to SIRI (Speech Interpretation Recognition Interface), LIRI takes a command and performs an action.

### Commands
Type in `node liri` followed by one of these commands:

  `concert-this <artist>`
  : Requires one argument, the name of an artist. Returns a list of upcoming events.
  
  `spotify-this-song <track>`
  : Requires one argument, the name of a song/track. Returns a list of songs/tracks with the specified name.
  
  `movie-this <title>`
  : Requires one argument, the title of a movie. Returns information about the movie with the specified title.
  
  `do-what-it-says`
  : Requires no arguments. Returns the result of one of the above commands with a default value.
  
### Packages
* axios
* console.table
* dotenv
* moment
* node-spotify-api

### APIs
* Bands in Town
* Open Movie Database
* Spotify
