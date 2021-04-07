const express = require('express');
const bodyParser = require('body-parser');
const { hostname, hostport } = require('./local-config');
const app = express();

// To set up the database (MongoDB) connection, we invoke the function from initDB module
require('./initDB')();


// Testroute
app.get('/', (req, res) => {
  res.send('Root address is working!!');
})



app.listen(hostport, hostname, () => {
  console.log(`Server listening on port ${hostport}`);
})