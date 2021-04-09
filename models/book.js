const mongoose = require('mongoose');

// Create a schema for the books, with properties for the data we want for each book
// Also, I drop having the required option and just define the type of each property
// PS: the datatype Number works for both whole numbers/ints and floats :)
const BookSchema = new mongoose.Schema({
  id: Number,
  isbn: Number,
  title: String, //Add this to books-array property in library and pubCompany (just one each of these) + author/genre (update it) for correct author/genre when creating new book!
  author: String,
  price: Number,
  pages: Number,
  genre: String,
  publisher: String
});


module.exports = mongoose.model('Book', BookSchema);