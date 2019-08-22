function error(err) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(err.response.data);
        console.log("---------------Status---------------");
        console.log(err.response.status);
        console.log("---------------Status---------------");
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `err.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", err.message);
      }
      console.log(err.config);
}

module.exports = error;