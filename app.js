// Template File to paste with all the files that one can use

// 1 - Changing the jshint to version 6
// jshint esversion:6

// 2 - Bring in Packages
const express = require('express') // Add Express
const bodyParser = require('body-parser') // Add Body Parser

// 3 - Create app constant using express
const app = express()

// 6 - Setup ejs, placed below app declared
app.set('view engine', 'ejs')

// 5 - Creating the first GET route
app.get('/', function (req, res) {
	// user access the Home route
	var today = new Date()
	var currentDay = today.getDay()
	var day = ''

	switch (currentDay) {
		case 0:
			day = 'Sonntag'
			break
		case 1:
			day = 'Montag'
			break
		case 2:
			day = 'Dienstag'
			break
		case 3:
			day = 'Mittwoch'
			break
		case 4:
			day = 'Donnerstag'
			break
		case 5:
			day = 'Freitag'
			break
		case 6:
			day = 'Samstag'
			break

		default:
			console.log('Error: current day is equal to: ' + currentDay)
	}

	res.render('list', { kindOfDay: day })
})

// 4 - Write App listen in port 3000
app.listen(3000, function () {
	// console log the server has been started
	console.log('Server started on port 3000')
})
