const express = require("express");
const router = express.Router();
const axios = require("axios");
const dotenv = require('dotenv');
require('dotenv').config();
router.get("/:name", (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
            key: `${process.env.youtube_api_key}`,
            q: req.params.name,
            type: 'vid',
            part: 'snippet',
            maxResults: '1'
        }
    }
    axios
        .request(options)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
});
module.exports = router;
