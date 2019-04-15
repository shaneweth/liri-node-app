const keys = require("./keys.js");

const axios = require("axios");



const movieArg = process.argv[2];

myMovie = process.argv.splice(3).join(" ");


if (movieArg === "movie-this" && myMovie) {
    console.log("Easy, tiger! Cooking this up now...")
    
    getMovie();
}

function getMovie() {

        axios   .get("http://www.omdbapi.com/?t=" + myMovie + "&apikey=trilogy")
                .then(function(response) {
                    // console.log(response.data);

                    let movTitle    = response.data.Title;
                    let movYear     = response.data.Year;
                    let movImdb     = response.data.imdbRating;
                    let movRot      = response.data.Ratings[1].Value;
                    let movCountry  = response.data.Country;
                    let movLang     = response.data.Language;
                    let movPlot     = response.data.Plot;
                    let movAct      = response.data.Actors;

                    
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