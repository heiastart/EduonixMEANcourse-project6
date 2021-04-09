const Genre = require('../models/genre');

exports.genre_fetch_all = (req, res) => {
  Genre.find((err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.genre_fetch_by_id = (req, res) => {
  Genre.findById(req.params.id, (err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.genre_create = (req, res) => {
  var genre = new Genre({
    id: req.body.id,
    name: req.body.name
  })

  genre.save((err) => {
    if (err) return next(err);
    res.send('Genre entry saved successfully');
  })
}

exports.genre_update_by_id = (req, res) => {
  Genre.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, item) => {
    if (err) return next(err);
    res.send('Genre with ID ' + req.params.id + ' updated successfully!\n' + item);
  })
}

exports.genre_delete_by_id = (req, res) => {
  Genre.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Genre deleted successfully!');
  })
}