const express = require('express');
const moment = require('moment-timezone');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.render('index.html');
});

app.get('/:time', (req, res) => {
	var time = req.params.time;
	res.send(checkAndReturnTimeStamp(time));
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});

// { "unix": 1450159200000, "natural": "December 15, 2015" }

function checkAndReturnTimeStamp(time) {
	// includes a letter
	if (isNaN(time)) {
		if (new Date(time).toString() === 'Invalid Date') {
			return new Timestamp(null, null);
		}
		var unix = new Date(time).getTime();
		return new Timestamp(unix, time);
	// only numbers
	} else {
		var uglyDate = new Date(Number(time));
		var natural = moment(uglyDate).tz("America/Monterrey").format("MMMM DD, YYYY");
		return new Timestamp(time, natural);
	}
}

function Timestamp(unix, natural) {
    this.unix = unix;
    this.natural = natural;
}