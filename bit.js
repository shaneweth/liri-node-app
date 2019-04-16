const axios = require("axios");

const concertArg = process.argv[2];

const myArtist = process.argv.slice(3).join("%20");

var queryURL = "https://rest.bandsintown.com/artists/" + myArtist + "/events?app_id=codingbootcamp";

if (concertArg === "concert-this" && myArtist) {
    console.log("Groovin on up - to these shows...")

    getShow();
}

function getShow() {

    axios   .get(queryURL)
            .then(function(response) {

                console.log(response.data[0]);
            })
}