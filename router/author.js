const express = require('express');
const router = express.Router();

var author_controller = require('../controller/author');

// Routes for the app on url root/author/<routes from here>
router.get('/all', author_controller.author_fetch_all);

router.get('/:id', author_controller.author_fetch_by_id);

router.post('/create', author_controller.author_create);

router.put('/:id/update', author_controller.author_update_by_id);

router.delete('/:id/delete', author_controller.author_delete_by_id);


module.exports = router;