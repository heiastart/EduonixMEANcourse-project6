const mongoose = require('mongoose');

// Create a schema for the books, with properties for the data we want for each book
// Also, I drop having the required option and just define the type of each property
const AuthorSchema = new mongoose.Schema({
  id: Number,
  fullName: String,
  nationality: String,
  gender: String,
  mainGenre: String,
  books: []
});


module.exports = mongoose.model('Author', AuthorSchema);