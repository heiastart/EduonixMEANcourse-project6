const express = require('express');
const router = express.Router();

var book_controller = require('../controller/book');

// Routes for the app on url root/book/<routes from here>
router.get('/all', book_controller.book_fetch_all);

router.get('/:id', book_controller.book_fetch_by_id);

router.post('/create', book_controller.book_create);

router.put('/:id/update', book_controller.book_update_by_id);

router.delete('/:id/delete', book_controller.book_delete_by_id);


module.exports = router;