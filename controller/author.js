const Author = require('../models/author');

exports.author_fetch_all = (req, res) => {
  Author.find((err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.author_fetch_by_id = (req, res) => {
  Author.findById(req.params.id, (err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.author_create = (req, res) => {
  var author = new Author({
    id: req.body.id,
    fullName: req.body.fullName,
    nationality: req.body.nationality,
    gender: req.body.gender,
    mainGenre: req.body.mainGenre
  })

  author.save((err) => {
    if (err) return next(err);
    res.send('Author entry saved successfully');
  })
}

exports.author_update_by_id = (req, res) => {
  Author.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, item) => {
    if (err) return next(err);
    res.send('Author with ID ' + req.params.id + ' updated successfully!\n' + item);
  })
}

exports.author_delete_by_id = (req, res) => {
  Author.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Author deleted successfully!');
  })
}