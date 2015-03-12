# mobile 

This is a working mobile site designed with flight planning in mind. Live demo can be viewed at http://lilyribeiro.com/mobile. 

The weather section will create a METAR link once you enter an airport code. Link will take to a Weather API page with the relevant METAR information for the airport in question. Uses Angular and VanillaJS. 

The Flight plan section uses jQuery Validate and Angular to check form input and record inputs at the bottom of the page. 

The Departure and Destination panels will fetch data from an aviation API with the airport sectional image. Also fetches latitude/longitude and other information from a json Airports file. 
