var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
console.log("App listening on PORT " + PORT);
});

// I spent a lot of time trying to figure out why my $.post was not working.
// I figured out that it was because I was not passing in my array of scores
// (userResults) as an object, thus my scores were being returned on the back-end 
// as undefined. Because it was taking so long to figure out, I moved on and had written the logic
// for the compatability before fixing this problem. This led to me having many 
// problems when trying to fix the logic afterwards. I know this is incomplete but
// if I had completed it in time, I would have sent the "matchedFriend" variable back 
// to the frontend using a callback function and presented the "matchedFriend" to the user.