const router = require("express").Router();
//const Movie = require("../models/Movie");
const verify = require("../verifyToken");
const fileUpload = require("express-fileupload");
router.use(fileUpload());

// Upload2 Endpoint
router.post("/", verify, (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.video;

  file.mv(`${__dirname}/videos/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/videos/${file.name}` });
  });
});

module.exports = router;
