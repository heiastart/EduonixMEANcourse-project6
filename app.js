const express = require('express');
const bodyParser = require('body-parser');
const { hostname, hostport } = require('./local-config');
const app = express();

// To set up the database (MongoDB) connection, we invoke the function from initDB module
require('./initDB')();

// Import the routes for all the models/objects in this app
const endpointsAuthor = require('./router/author');
const endpointsBook = require('./router/book');
const endpointsGenre = require('./router/genre');
const endpointsLibrary = require('./router/library');
const endpointsPubCompany = require('./router/pubCompany');

// Important app.use config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/author', endpointsAuthor);
app.use('/book', endpointsBook);
app.use('/genre', endpointsGenre);
app.use('/library', endpointsLibrary);
app.use('/pub-company', endpointsPubCompany);


// Testroute
app.get('/', (req, res) => {
  res.send('Root address is working!!');
})



app.listen(hostport, hostname, () => {
  console.log(`Server listening on port ${hostport}`);
})