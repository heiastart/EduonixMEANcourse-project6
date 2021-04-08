const mongoose = require('mongoose');

// Create a schema for the books, with properties for the data we want for each book
// Also, I drop having the required option and just define the type of each property
const PubCompanySchema = new mongoose.Schema({
  id: Number,
  name: String,
  numBooks: Number,
  numEmployees: Number,
  books: []
});


module.exports = mongoose.model('PubCompany', PubCompanySchema);