const Library = require('../models/library');

exports.library_fetch_all = (req, res) => {
  Library.find((err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.library_fetch_by_id = (req, res) => {
  Library.findById(req.params.id, (err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.library_create = (req, res) => {
  var library = new Library({
    id: req.body.id,
    location: req.body.location,
    numBooks: req.body.numBooks,
    numEmployees: req.body.numEmployees
  })

  library.save((err) => {
    if (err) return next(err);
    res.send('Library entry saved successfully');
  })
}

exports.library_update_by_id = (req, res) => {
  Library.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, item) => {
    if (err) return next(err);
    res.send('Library with ID ' + req.params.id + ' updated successfully!\n' + item);
  })
}

exports.library_delete_by_id = (req, res) => {
  Library.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Library deleted successfully!');
  })
}