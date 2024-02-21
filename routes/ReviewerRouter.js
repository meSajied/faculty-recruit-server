const express = require('express');
const router = express.Router();

const ReviewerSchema = require("../schemas/ReviewerSchema");
const {Query} = require("../Query");
const ApplicationSchema = require('../schemas/ApplicationSchema');

router
    .post("/login", async(req, res, next) => {
        await new Query(req, res, ReviewerSchema).reviewerLogin();
    })

    .post("/change-password", async(req, res, next) => {
        await new Query(req, res, ReviewerSchema).changeReviewerPassword();
    })

    .get("/applications", async(req, res, next) => {
        await new Query(req, res, ApplicationSchema).applications();
    })

    .post("/applications", async(req, res, next) => {
        await new Query(req, res, ApplicationSchema).updateApplication();
    })


module.exports = router;