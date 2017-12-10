const port = 3001;

const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');

const { getArtist } = require('./controllers/control.js')

const app = express();

app.use(json())
app.use(cors())


//axios comes HERE and looks for my endpoint which is "/api/getApiData"
app.get("/api/getApiData", getArtist)


app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});



