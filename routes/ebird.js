const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
const { response } = require('express');
require('dotenv').config();
 router.get('/:location', (req, res) => {
    let regionConde=req.params.location;
    const options = {
        method: 'GET',
        url: `https://api.ebird.org/v2/data/obs/${regionConde}/recent`,
        params: {maxResults: '200'},
        headers: {'Content-Type': 'application/json', 'X-eBirdApiToken': `${process.env.bird_api_token}`}
      };
     axios.request(options).then((response)=> {
        res.json(response.data)
      }).catch((e)=> {
        console.error(e);
      });
});

module.exports = router;




