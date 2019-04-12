require("dotenv").config();

const keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

var spotifyThisSong = process.argv[2];
var mySong = process.argv[3];

if (spotifyThisSong === "spotify-this-song" && mySong) {
    console.log("Coming up... Hold your horses.")
    getSong();
} else if (spotifyThisSong === "spotify-this-song" && mySong != true) {
    theSign();
}

function getSong() {
    spotify.search({ type: "track", query: mySong}, function(err, data) {
        if (err) {
            return console.log("It's Slippery In Here... " + err);
        }

        console.log(JSON.stringify(data, null, 2));
    });
}

function theSign() {
    spotify.search({ type: "track", query: "The Sign"}, function(err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }

        console.log(JSON.stringify(data, null, 2));
    });
}