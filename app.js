const express = require('express');
const {localStorage} = require("node-localstorage")
const router = express.Router();
const ebirdRouter = require('./routes/ebird'); 
const youtubeRouter = require('./routes/youtube'); 
const flickrRouter = require('./routes/flickr'); 
const app = express();
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.writeHead(200,{'content-type': 'text/html'});
    fetchOneByKey();
    fs.readFile('index.html','utf8',(error,data)=>{
        if(error){
            res.end("Cannot load the map")
        }else
        newkey=newkey;
        res.write(`<div class="p">Hit counters:${newkey} </div>`);
        res.end(data);        
    })
});
let newkey='';
app.use(express.static(path.join(__dirname, 'public')));//maybe later these two will not be necessay
app.use('/findBird',ebirdRouter);//for looking for bird data from serverside
app.use('/findYoutube',youtubeRouter);
app.use('/findPhotos',flickrRouter);
app.listen(port, function () {
    console.log(`Express app listening at http://${hostname}:${port}/`); 
});

const AWS = require("aws-sdk");
let awsConfig = {
  "region": "ap-southeast-2",
  "endpoint": "https://dynamodb.ap-southeast-2.amazonaws.com",
  "accessKeyId": `${process.env.AWS_ACCESS_KEY_ID}`,
  "secretAccessKey": `${process.env.AWS_SECRET_ACCESS_KEY}`,
  "sessionToken":`${process.env.AWS_SESSION_TOKEN}`,
};

AWS.config.update(awsConfig);
// Create DynamoDB service
let doClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = async function () {
  const params = {
    TableName: "userC",
    Key: {
      "qut-username": "n10839631@qut.edu.au",
      "me":'88888888',
    },
  };
  doClient.get(params, function (err, data) {
    if (err) {
      console.log(JSON.stringify(err, null, 2));
    } else {
      console.log(JSON.stringify(data, null, 2));
            newkey = data["Item"]["pageCounter"];
            console.log("key: ", newkey)
            modify(newkey);       
    }
  });
};

let modify =(key)=>{
    const params = {
        TableName: "userC",
        Key: {
          "qut-username": "n10839631@qut.edu.au",
          "me":'88888888',
                },
        UpdateExpression: 'SET #pageCounter = :val',
        ExpressionAttributeValues:{
            ":val":key+1
        },
        ExpressionAttributeNames:{
            "#pageCounter":"pageCounter"
        },ReturnValues:"UPDATED_NEW"
    };
    doClient.update(params,(err,data)=>{
        if (err) {
            console.log(JSON.stringify(err, null, 2));
          } else {
            newkey=key;
            console.log(JSON.stringify(data, null, 2));
          }
    })
}

module.exports = router;
