
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'lib/airport_data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {

// .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    };
    xobj.send(null);

}

function init() {
$(document).ready(function() {

        loadJSON(function (response) {
            // Parse JSON string into object
            var actual_JSON = JSON.parse(response);
            for (var i = 0; i < actual_JSON.length; i++) {
                var obj = actual_JSON[i];
                var faa = obj.faa;
                var airport = obj.airport;
                var city = obj.city;
                var lat = obj.lat;
                var lng = obj.lng;
                var state = obj.state;
                var apcode2 = document.getElementById('airportCode2').value;
                for(var j = 0; j<faa.length;j++ ){
                    if(faa[j] == apcode2){
                        console.log("Airport Name: " + airport + "City: " + city +  "State: " + state + "Latitude: " + lat + "Longitude: " + lng);
                        document.getElementById('airportinfo').innerHTML = "Airport Name: " + airport + "<br />" + "City: " + city + "<br />" + "State: " + state + "<br />" + "Latitude: " + lat + "<br />" + "Longitude: " + lng;
                        var mapImageUrl = "http://vfrmap.com/api?req=map&type=sectc&lat=" + lat + "&lon=-" + lng + "&zoom=10&width=340&height=340";
                        document.getElementById("airportimage").src = (mapImageUrl);
                    }
                }
            }



        });

});}

function init2() {
    $(document).ready(function() {

        loadJSON(function (response) {
            // Parse JSON string into object
            var actual_JSON = JSON.parse(response);
            for (var i = 0; i < actual_JSON.length; i++) {
                var obj = actual_JSON[i];
                var faa = obj.faa;
                var airport = obj.airport;
                var city = obj.city;
                var lat = obj.lat;
                var lng = obj.lng;
                var state = obj.state;
                var apcode2 = document.getElementById('airportCode3').value;
                for(var j = 0; j<faa.length;j++ ){
                    if(faa[j] == apcode2){
                        console.log("Airport Name: " + airport + "City: " + city +  "State: " + state + "Latitude: " + lat + "Longitude: " + lng);
                        document.getElementById('airportinfo2').innerHTML = "Airport Name: " + airport + "<br />" + "City: " + city + "<br />" + "State: " + state + "<br />" + "Latitude: " + lat + "<br />" + "Longitude: " + lng;
                        var mapImageUrl = "http://vfrmap.com/api?req=map&type=sectc&lat=" + lat + "&lon=-" + lng + "&zoom=10&width=340&height=340";
                        document.getElementById("airportimage2").src = (mapImageUrl);
                    }
                }
            }



        });

    });}