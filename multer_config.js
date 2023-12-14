const multer = require("multer");
const path = require("path");
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let saveDir = './job_circular';

    if(!fs.existsSync(saveDir)){
      fs.mkdirSync(saveDir, {recursive: true});
    }

    cb(null, saveDir);
  }
});

const upload = multer({storage: storage})

module.exports = {upload}