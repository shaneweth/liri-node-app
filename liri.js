require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");

const spotify = new Spotify(keys.spotify);
const spotifyThisSong = process.argv[2];

mySong = process.argv.splice(3).join(" ");


if (spotifyThisSong === "spotify-this-song" && mySong) {
    console.log("Coming up... Hold your horses.")
    getSong();
} else if (spotifyThisSong === "spotify-this-song" && mySong != true) {
    theSign();
}

function getSong() {

    spotify
        .search({ type: "track", query: mySong, available_markets: "US", limit: 5 })
        .then((response) => {

            for (let i = 0; i < response.tracks.items.length; i++) {

                let nameRes =   response.tracks.items[i].name;
                let albumRes =  response.tracks.items[i].album.name;
                let artistRes = response.tracks.items[i].album.artists[0].name;
                let urlRes =    response.tracks.items[i].preview_url;


                console.log("<================================>");
                console.log("  ");
                console.log("Song Name: " + nameRes);
                console.log("Album Name: " + albumRes);
                console.log("Artist Name: " + artistRes);
                console.log("Preview Link: " + urlRes);
                console.log("  ");
                console.log("<________________________________>");

            }

        })
        .catch(function (err) {
            console.log(err);
        });

}

function theSign() {
    spotify.search({ type: "track", query: "The Sign" }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }

        console.log(JSON.parse(data, null, 2));
    });
}