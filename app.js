/**
 * http://usejsdoc.org/
 */

	var http = require("http");
	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	//const ejs = require("ejs");
	app.use(express.static(__dirname + '/public'));

	global.selectedIndex = 0;
	/*
	var mysql      = require('mysql');
	var bodyParser = require('body-parser');
	app.use(express.static(__dirname + '/public'));
	
	var connection = mysql.createConnection({
		   host     : 'localhost',
		    database : 'car_db',
		    user     : 'root',
		    password : '',
		});


		connection.connect(function(err) {
		  if (err) throw err
		  console.log('You are now connected...')
		})
		
		*/
		app.use( bodyParser.json() );       // to support JSON-encoded bodies
		app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
			extended: true
		})); 

     //   app.set("view engine", "ejs");
      var server = app.listen(3000, "127.0.0.1", function () {

		var host = server.address().address
		var port = server.address().port

		console.log("Example app listening at http://%s:%s", host, port)

	 });
		
      app.get('/services', function (req, res) {
    	     console.log(__dirname);
    	     res.sendFile(__dirname+'/public/services.html');
    	    //res.sendFile(path.join(__dirname + '/services.html'));
    	   
    	    //res.sendFile(path.join('C:/Users/User/Desktop/carsales/services.html'));
    	});
      
    
	  
	  //rest api to get all results
      app.get('/getselecteditem', function (req, res) {
		console.log(req);
		//connection.query('SELECT c.id as "index",c.thumbnil as "image",c.options as "options",c.details as "details" FROM car_details c INNER JOIN activity_history h ON c.id = h.option_id WHERE h.id= (SELECT MAX(id) FROM activity_history)', function (error, results, fields) {
		//var selectedIndex = req.body.selected_op_id;
		var strres='{"index": '+selectedIndex+'}';
		console.log(strres);
		 res.send(strres);
		// });
	 });
      
    
      
      	
	  //rest api to create a new record into mysql database
	  
      app.post('/setselectedoption', function (req, res) {
		 var postData  = req.body;
		 console.log("postData="+postData.id);
		// console.log()
         //connection.query('INSERT INTO activity_history SET option_id=?', [postData.id], function (error, results, fields) {
		   // if (error) throw error;
		   selectedIndex=postData.id;
		   var strres='{"index": '+postData.id+'}';
      	  res.end(JSON.stringify(strres));
		 // });
		  
	  });
	