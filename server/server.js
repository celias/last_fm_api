

const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');

const { getArtist } = require("./controllers/control.js")

// https://www.npmjs.com/package/last-fm
const LastFM = require('last-fm');
//const lastfm = new LastFM('API_KEY', ) //not sure what to do here...

const app = express();

const port = 3001;
app.use(json())
app.use(cors())
// const controller = require("./controllers/control.js");

app.get("/api/getApiData", getArtist)

app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});



