const axios = require("axios");
const moment = require("moment");

const concertArg = process.argv[2];

const myArtist = process.argv.slice(3).join("%20");

var queryURL = "https://rest.bandsintown.com/artists/" + myArtist + "/events?app_id=codingbootcamp";

if (concertArg === "concert-this" && myArtist) {
    console.log("Moving on up - to some musical events...")

    getShow();
}

function getShow() {

    axios.get(queryURL)
        .then(function (response) {


            
            console.log("|^|****************|  " +  myArtist  + "  |****************|^|")

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

