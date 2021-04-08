const express = require('express');
const router = express.Router();

var genre_controller = require('../controller/genre');

// Routes for the app on url root/genre/<routes from here>
router.get('/all', genre_controller.genre_fetch_all);

router.get('/:id', genre_controller.genre_fetch_by_id);

router.post('/create', genre_controller.genre_create);

router.put('/:id/update', genre_controller.genre_update_by_id);

router.delete('/:id/delete', genre_controller.genre_delete_by_id);


module.exports = router;