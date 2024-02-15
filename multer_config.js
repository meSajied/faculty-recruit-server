const multer = require("multer");
const path = require("path");
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let saveDir = './uploads/job_circular';

    if(!fs.existsSync(saveDir)){
      fs.mkdirSync(saveDir, {recursive: true});
    }
    cb(null, saveDir);
  },
  filename: function(req, file, cb) {
    cb(null, `${req.body.id}.pdf`)
  }
});

const storageMultiple = multer.diskStorage({
  destination: function(req, file, cb) {
    let saveDir = `./uploads/applications/${req.body.id}`;

    if(!fs.existsSync(saveDir)){
      fs.mkdirSync(saveDir, {recursive: true});
    }
    cb(null, saveDir);
  },
  filename: function(req, file, cb) {
    if(file.fieldname === "photo") {
      cb(null, "photo.jpg");
    }

    if(file.fieldname === "transcript") {
      cb(null, "transcript.pdf");
    }
    
    if(file.fieldname === "mcir") {
      cb(null, "mcir.pdf");
    }

    if(file.fieldname === "nationalId") {
      cb(null, "nationalId.pdf");
    }
  }
});

const upload = multer({storage: storage});
const uploadMultiple = multer({storage: storageMultiple});

module.exports = {upload, uploadMultiple}