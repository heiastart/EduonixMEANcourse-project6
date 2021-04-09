const PubCompany = require('../models/pubCompany');

exports.pub_company_fetch_all = (req, res) => {
  PubCompany.find((err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.pub_company_fetch_by_id = (req, res) => {
  PubCompany.findById(req.params.id, (err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.pub_company_create = (req, res) => {
  var pubCompany = new PubCompany({
    id: req.body.id,
    name: req.body.name,
    numBooks: req.body.numBooks,
    numEmployees: req.body.numEmployees
  })

  pubCompany.save((err) => {
    if (err) return next(err);
    res.send('PubCompany entry saved successfully');
  })
}

exports.pub_company_update_by_id = (req, res) => {
  PubCompany.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, item) => {
    if (err) return next(err);
    res.send('PubCompany with ID ' + req.params.id + ' updated successfully!\n' + item);
  })
}

exports.pub_company_delete_by_id = (req, res) => {
  PubCompany.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('PubCompany deleted successfully!');
  })
}