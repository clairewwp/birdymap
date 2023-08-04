const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/:birdName", (req, res) => {
  const options = {
    method: 'GET',
  url: 'https://api.flickr.com/services/feeds/photos_public.gne',
  params: {tags: req.params.birdName, format: 'json', nojsoncallback: '1'},
  headers: {
    cookie: 'ccc=%257B%2522needsConsent%2522%253Afalse%252C%2522managed%2522%253A0%252C%2522changed%2522%253A0%252C%2522info%2522%253A%257B%2522cookieBlock%2522%253A%257B%2522level%2522%253A0%252C%2522blockRan%2522%253A0%257D%257D%257D; xb=919938; localization=en-us%253Bau%253Bau; flrbp=1663205583-0674f288e72f4e8104b4f65741341091de2a26b7; flrbgrp=1663205583-f7fc1bbc593797517ac7a2a1c010ad38756baa8e; flrbgdrp=1663205583-103b9fbf4fbf2f5c9488cdd1715a053235f6087d; flrbgmrp=1663205583-9eca20ebff8005673aba02bde2e185455aa91282; flrbrst=1663205583-e4da615bd90d28fceb2255538e6432d8aed2979f; flrtags=1663205583-4e67d76e272dfb3c5ddb42d96afdebf782ec8334; flrbrp=1663205583-2c2e8d70d55654a39037fab503690c04e184d71c; flrb=27'
  }
};

  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
module.exports = router;
