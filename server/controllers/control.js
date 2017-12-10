const axios = require("axios");
const {apiKey} = require("./../config.js");

const getArtist = (req, res, next) => {
  

  axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`).then(response => {
  return res.json(response.data);
    }).catch(console.log);
};


module.exports = {
  getArtist
};