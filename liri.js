// REQUIREMENTS 

require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// req for OMDB & BandsInTown
const axios = require("axios");
const moment = require("moment");


// SEARCH PARAMETERS
const searchType = process.argv[2];
const searchTerm = process.argv.slice(3).join(" ");

switch (searchType) {
    case "spotify-this-song":
        console.log("Spinning up this record.");
        getSong();
        break;

    case "concert-this":
        console.log("Good Idea. Let's Go Outside...");
        getShow();
        break;

    case "movie-this":
        console.log("This is a funny joke about movies.");
        getMovie();
        break;
}



function getSong() {

    spotify
        .search({ type: "track", query: searchTerm, available_markets: "US", limit: 5 })
        .then((response) => {

            for (let i = 0; i < response.tracks.items.length; i++) {

                let nameRes = response.tracks.items[i].name;
                let albumRes = response.tracks.items[i].album.name;
                let artistRes = response.tracks.items[i].album.artists[0].name;
                let urlRes = response.tracks.items[i].preview_url;


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

//*************************************************** */
// getMovie Function

function getMovie() {

    axios   .get("http://www.omdbapi.com/?t=" + myMovie + "&apikey=trilogy")
            .then(function (response) {

            let movTitle = response.data.Title;
            let movYear = response.data.Year;
            let movImdb = response.data.imdbRating;
            let movRot = response.data.Ratings[1].Value;
            let movCountry = response.data.Country;
            let movLang = response.data.Language;
            let movPlot = response.data.Plot;
            let movAct = response.data.Actors;


            console.log("  ");
            console.log("++****************************++");
            console.log("  ");
            console.log("Title: " + movTitle);
            console.log("Year: " + movYear);
            console.log("IMDB Rating: " + movImdb);
            console.log("Rotten Tomatoes Rating: " + movRot);
            console.log("Country Produced: " + movCountry);
            console.log("Language: " + movLang);
            console.log("Plot Summary: " + movPlot);
            console.log("Actors: " + movAct);
            console.log("  ");
            console.log("++****************************++");
            console.log("  ");

        })

}

// *****************************************************************************
// getShow function

var queryURL = "https://rest.bandsintown.com/artists/" + myArtist + "/events?app_id=codingbootcamp";

function getShow() {

    axios.get(queryURL)
        .then(function (response) {

            console.log("|^|****************|  " + myArtist + "  |****************|^|")

            for (x = 0; x < response.data.length; x++) {

                const resName = response.data[x].venue.name;
                const resCity = response.data[x].venue.city;
                const resReg = response.data[x].venue.region;
                let resTime = response.data[x].datetime;

                let formTime = moment(resTime).format("MM/DD/YYYY")

                console.log("***********************************************")
                console.log("_______________________________________________")
                console.log(resName);
                console.log(resCity);
                console.log(resReg);
                console.log(formTime);
                console.log("***********************************************")

            }
        })
}
