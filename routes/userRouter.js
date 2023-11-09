var express = require('express');
var router = express.Router();

/* Routers for applicant */
router.route('/applicant')
    .get()
    .post()

/* Routers for reviewers */
router.route('/reviewer')
    .get()
    .post()

/* Routers for admin */
router.route('/admin')
    .get()
    .post()

module.exports = router;
