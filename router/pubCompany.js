const express = require('express');
const router = express.Router();

var pub_company_controller = require('../controller/pub_company');

// Routes for the app on url root/pub_company/<routes from here>
router.get('/all', pub_company_controller.pub_company_fetch_all);

router.get('/:id', pub_company_controller.pub_company_fetch_by_id);

router.post('/create', pub_company_controller.pub_company_create);

router.put('/:id/update', pub_company_controller.pub_company_update_by_id);

router.delete('/:id/delete', pub_company_controller.pub_company_delete_by_id);


module.exports = router;