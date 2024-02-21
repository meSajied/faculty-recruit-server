const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs");

const filepath = path.resolve(__dirname + "/../uploads/applications")

router
    .get("/:id/mcir", async(req, res, next) => {
      const applicationId = req.params.id

      const file = filepath + `/${applicationId}/mcir.pdf`;
      res.sendFile(file, {
        headers: {
          'Content-Type': 'application/pdf'
        }
      })
    })

    .get("/:id/nationalId", async(req, res, next) => {
      const applicationId = req.params.id

      const file = filepath + `/${applicationId}/nationalId.pdf`;
      res.sendFile(file, {
        headers: {
          'Content-Type': 'application/pdf'
        }
      })
    })

    .get("/:id/transcript", async(req, res, next) => {
      const applicationId = req.params.id

      const file = filepath + `/${applicationId}/transcript.pdf`;
      res.sendFile(file, {
        headers: {
          'Content-Type': 'application/pdf'
        }
      })
    })

    .get("/:id/photo", async(req, res, next) => {
      const applicationId = req.params.id

      const file = filepath + `/${applicationId}/photo.jpg`;

      res.sendFile(file, {
        headers: {
          'Content-Type': 'image/jpg'
        }
      })
    })

module.exports = router;
