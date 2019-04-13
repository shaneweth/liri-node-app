require("dotenv").config();

const keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

var spotifyThisSong = process.argv[2];
var mySong = process.argv[3];

// var tracks = [];


if (spotifyThisSong === "spotify-this-song" && mySong) {
    console.log("Coming up... Hold your horses.")
    getSong();
} else if (spotifyThisSong === "spotify-this-song" && mySong != true) {
    theSign();
}

function getSong() {


    spotify .search({ type: "track", query: mySong, limit: 5 })
            .then((...response) => {
                // response = response.map(results => results.tracks.items[0].name + results.tracks.items[0].album);
                response = response.map(res => res.tracks.items);
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });

}

function theSign() {
    spotify.search({ type: "track", query: "The Sign"}, function(err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }

        console.log(JSON.parse(data, null, 2));
    });
}