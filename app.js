// Template File to paste with all the files that one can use

// 1 - Changing the jshint to version 6
// jshint esversion:6

// 2 - Bring in Packages
const express = require('express') // Add Express
const bodyParser = require('body-parser') // Add Body Parser

// 3 - Create app constant using express
const app = express()

// 5 - Creating the first GET route
app.get('/', function (req, res) {
	// user access the Home route
	var today = new Date()
	var currentDay = today.getDay()

	if (currentDay === 6 || currentDay === 0) {
		res.write("<h1>Yay it's the weekend</h1>")
	} else {
		// response from server side
		res.sendFile(__dirname + '/index.html')
	}
})

// 4 - Write App listen in port 3000
app.listen(3000, function () {
	// console log the server has been started
	console.log('Server started on port 3000')
})
