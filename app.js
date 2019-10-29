var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Canton Tower", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Canton_Tower_2013.11.15_18-12-45.jpg/225px-			Canton_Tower_2013.11.15_18-12-45.jpg"},
		{name: "baiyun mountain", image: "http://p4-q.mafengwo.net/s10/M00/69/83/wKgBZ1nXdhuAYxjAAAu_dfzu4oI78.jpeg?							imageMogr2%2Fthumbnail%2F%21305x183r%2Fgravity%2FCenter%2Fcrop%2F%21305x183%2Fquality%2F100"},
		{name: "the pearl river", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pearl_River_Canton_Tower.JPG/220px-			Pearl_River_Canton_Tower.JPG"}
];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds:campgrounds});
});


app.post("/campgrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name:name, image:image}
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});


app.listen(3000, () => {
	console.log("The YelpCamp has started!");
});