require("dotenv").config();

const keys = require("./keys.js");

const Spotify = require("node-spotify-api");

const spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

const spotifyThisSong = process.argv[2];
const mySong = process.argv[3];



if (spotifyThisSong === "spotify-this-song" && mySong) {
    console.log("Coming up... Hold your horses.")
    getSong();
} else if (spotifyThisSong === "spotify-this-song" && mySong != true) {
    theSign();
}



function getSong() {

    // const tracks = []
    
    spotify
        .search({ type: "track", query: mySong, limit: 5 })
        .then((...response) => {
            
                response = response.map(results => results.tracks.items);
                
                console.log(response);

                

            })
        .catch(function (err) {
            console.log(err);
        });

    }







// function theSign() {
//     spotify.search({ type: "track", query: "The Sign" }, function (err, data) {
//         if (err) {
//             return console.log("Error occurred: " + err);
//         }

//         console.log(JSON.parse(data, null, 2));
//     });
// }