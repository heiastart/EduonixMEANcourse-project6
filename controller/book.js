const Book = require('../models/book');

exports.book_fetch_all = (req, res) => {
  Book.find((err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.book_fetch_by_id = (req, res) => {
  Book.findById(req.params.id, (err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.book_create = (req, res) => {
  var book = new Book({
    id: req.body.id,
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    pages: req.body.pages,
    genre: req.body.genre,
    publisher: req.body.publisher,
  })

  book.save((err) => {
    if (err) return next(err);
    res.send('Book entry saved successfully');
  })

  // Then, we should update the book-arrays in the other models, i.e author, genre, library and pubCompany

}

exports.book_update_by_id = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, item) => {
    if (err) return next(err);
    res.send('Book with ID ' + req.params.id + ' updated successfully!\n' + item);
  })
}

exports.book_delete_by_id = (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Book deleted successfully!');
  })
}