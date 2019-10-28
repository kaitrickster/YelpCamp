var express = require("express");
var app = express();


app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "guangzhou tower", image:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jeoolpih7jpkduacsvno/.jpg"},
		{name: "baiyun mountain", image: ""},
		{name: "the pearl river", image: ""}
	]
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, () => {
	console.log("The YelpCamp has started!");
});