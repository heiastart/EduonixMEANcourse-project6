const express = require('express');
const router = express.Router();

var library_controller = require('../controller/library');

// Routes for the app on url root/library/<routes from here>
router.get('/all', library_controller.library_fetch_all);

router.get('/:id', library_controller.library_fetch_by_id);

router.post('/create', library_controller.library_create);

router.put('/:id/update', library_controller.library_update_by_id);

router.delete('/:id/delete', library_controller.library_delete_by_id);


module.exports = router;