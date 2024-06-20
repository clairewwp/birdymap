
const express = require("express");
const router = express.Router();
const dotenv = require('dotenv');
require('dotenv').config();
const { createFlickr } = require('flickr-sdk');

const { flickr } = createFlickr(`${process.env.flickr_api_key}`);
router.get("/:birdName", async (req, res) => {
  const query = req.params.birdName;
  
  try {
    // Search for photos with the specified tag
    const response = await flickr('flickr.photos.search', {
      tags: query,
      per_page: 2,
    });

    // console.log('Flickr API response:', response.photos);
    const photoUrls =response.photos.photo.map(photo => {
      const farm=photo.farm;
      const server = photo.server;
      const id = photo.id;
      const secret = photo.secret;
      const photoUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
      
      return photoUrl;
    })

    // Return the actual photos data from the response body
    res.json(photoUrls);

  } catch (error) {
    console.error("Error fetching data from Flickr API", error);
    res.status(500).send("Error fetching data from Flickr API");
  }
});

module.exports = router;

//The following codes are no longer used as the flickr api cant not use the following to fetch the data in node.js anymore
// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// router.get("/:birdName", async (req, res) => {

//   const query = req.params.birdName;
  
//   const flickrAPI = {
//     method: 'get',
//     url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&per_page=2&nojsoncallback=1`,
//   };

//   try {
//     const response = await axios.request(flickrAPI);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data from Flickr API"+ error);
//     res.status(500).send("Error fetching data from Flickr API");
//   }
// });

// module.exports = router;