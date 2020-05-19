const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors());
app.use(express.static(`./public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/rooms/:roomID/reviews', (req, res) => {
  axios.get('http://18.220.252.131:3001/rooms/2/reviews')
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});
app.get('/rooms/:roomID/reviews/:phrase', (req, res) => {
  axios.get(`http://18.220.252.131:3001/rooms/2/reviews/${req.params.phrase}`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});
app.get('/carousel', (req, res) => {
  axios.get(`http://13.57.183.102:3003/carousel`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});
app.get('/rooms', (req, res) => {
  axios.get(`http://3.101.29.123:3004/rooms`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});
app.get('/data', (req, res) => {
  axios.get(`http://18.217.34.96:3002/data`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000....');
});
