//Link to firebase
var homelessplanet = new Firebase("https://homelessplanet.firebaseio.com/");

//User clicks on Manage your Nights
//Takes to Google Maps api page
//Shows user a Google map with Shelters listed with red markers
//If user clicks on the red marker it shows the user a box with information about that Shelter
//In the box the user can update information about the shelter, they can check in or notify that the shelter is full (if logged in)
//The box also shows the user the status of the shelter (if logged in)
//The box also displays the shelter name, address & phone number, what services they have available 
//The box also displays Yelp information about that shelter