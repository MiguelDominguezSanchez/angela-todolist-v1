// Template File to paste with all the files that one can use

// 1 - Changing the jshint to version 6
// jshint esversion:6

// 2 - Bring in Packages
const express = require('express') // Add Express
const bodyParser = require('body-parser') // Add Body Parser

// 3 - Create app constant using express
const app = express()

let items = [
	'Buy Food',
	'Cook Food',
	'Eat Food',
	'kauf brot',
	'duschen',
	'burpees machen',
	'sprachen lernen',
]

// 6 - Setup ejs, placed below app declared
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

// 5 - Creating the first GET route
app.get('/', function (req, res) {
	// user access the Home route
	let today = new Date()

	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	}

	let day = today.toLocaleDateString('en-US', options)

	res.render('list', { kindOfDay: day, newListItems: items })
})

app.post('/', function (req, res) {
	let item = req.body.newItem

	items.push(item)

	res.redirect('/')
})

// 4 - Write App listen in port 3000
app.listen(3000, function () {
	// console log the server has been started
	console.log('Server started on port 3000')
})
