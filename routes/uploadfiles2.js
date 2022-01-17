const router = require("express").Router();
//const Movie = require("../models/Movie");
const verify = require("../verifyToken");
const fileUpload = require("express-fileupload");
router.use(fileUpload());

// Upload1 Endpoint
router.post("/", verify, (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.imgTitle;
  //const file2 = req.files.imgSm;
  //   const file3 = req.files.imgTitle;
  //   const file4 = req.files.video;
  //   const file5 = req.files.trailer;

  file.mv(`${__dirname}/images/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/images/${file.name}` });
  });

  //   file2.mv(`${__dirname}/images/${file2.name}`, (err) => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).send(err);
  //     }

  //     res.json({ fileName2: file2.name, filePath2: `/images/${file2.name}` });
  //   });

  //   file3.mv(`${__dirname}/images/${file3.name}`, (err) => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).send(err);
  //     }

  //     res.json({ fileName3: file3.name, filePath3: `/images/${file3.name}` });
  //   });

  //   file4.mv(`${__dirname}/images/${file4.name}`, (err) => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).send(err);
  //     }

  //     res.json({ fileName4: file4.name, filePath4: `/images/${file4.name}` });
  //   });

  //   file5.mv(`${__dirname}/images/${file5.name}`, (err) => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).send(err);
  //     }

  //     res.json({ fileName5: file5.name, filePath5: `/images/${file5.name}` });
  //   });
});

module.exports = router;
