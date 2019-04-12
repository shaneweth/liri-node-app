require("dotenv").config();

// Code to import the "keys.js" file in order to store the var. 

var keys = require("./keys.js");


const a = process.argv[2];
const b = process.argv[3];

var spotify = new Spotify(keys.spotify);


console.log(spotify);