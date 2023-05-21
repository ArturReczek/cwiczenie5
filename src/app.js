const express = require("express");
const app = express();

get app("/test"), (_req, res) => {
	res.status(200).send("Hello World")
})

module.exports = app;
