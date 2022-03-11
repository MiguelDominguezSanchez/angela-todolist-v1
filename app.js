// Template File to paste with all the files that one can use

// 1 - Changing the jshint to version 6
// jshint esversion:6

// 2 - Bring in Packages
const express = require('express') // Add Express
const bodyParser = require('body-parser') // Add Body Parser
const date = require(__dirname + '/date.js')

// 3 - Create app constant using express
const app = express()

const items = ['Sport', 'Web Entwicklung', 'Grafik-Design', 'Sprachen lernen']
const workItems = []
// 6 - Setup ejs, placed below app declared
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
// tell express serve folder as static resource
app.use(express.static('public')) // specify  location of static files, public folder
// 5 - Creating the first GET route
app.get('/', function (req, res) {
	const day = date.getDate()

	res.render('list', { listTitle: day, newListItems: items })
})

app.post('/', function (req, res) {
	const item = req.body.newItem

	if (req.body.list === 'Arbeitsliste') {
		workItems.push(item)
		res.redirect('/arbeit')
	} else {
		items.push(item)
		res.redirect('/')
	}
})

//  Provide a work todo list Aufgabenliste
app.get('/arbeit', function (req, res) {
	res.render('list', { listTitle: 'Arbeitsliste', newListItems: workItems })
})

app.get('/about', function (req, res) {
	res.render('about')
})

app.post('/arbeit', function (req, res) {
	let item = req.body.newItem
	workItems.push(item)
	res.redirect('/arbeit')
})

// 4 - Write App listen in port 3000
app.listen(3000, function () {
	// console log the server has been started
	console.log('Server started on port 3000')
})
