const express = require('express');
const moment = require('moment-timezone');

app.get('/:time', (req, res) => {

});

function checkTimeStamp(time) {
	if (typeof time === 'number') {
		return {
			"unix": time,
			"natural": 
		}
	} else if (typeof time === 'string') {
		return {
			"unix": ,
			"natural": 
		}
	}
}