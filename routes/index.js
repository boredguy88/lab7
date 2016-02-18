var projects = require('../projects.json');

/*
 * GET home page.
 */


exports.view = function(req, res){
	console.log("1");
	projects["grid"] = false;
  	res.render('index', projects);
};

exports.view = function(req, res){
	var random_num = Math.random();
	console.log(random_num);
	console.log("hi");

	if (random_num >= 0){
		projects["grid"] = false;
		res.render('index', projects);
	}
	else{
		res.redirect('/grid');
	}
};

exports.viewGrid = function(req, res){
	console.log("2");
	projects["grid"] = true;
	res.render('index', projects);
};