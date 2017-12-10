const axios = require("axios");
const {apiKey} = require("./../config.js");

let idTags = [];

const getArtist = (req, res, next) => {
  
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`).then(response => {

      console.log(response.data)
      return res.json(response.data);
    }).catch(console.log);
  };

const pushTag = (req, res, next) => {
  idTag.push(req.body);
  res.json(idTag);
};


module.exports = {
  getArtist
 
};