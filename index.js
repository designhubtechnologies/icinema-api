const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const filesRoute = require("./routes/files");
const files1Route = require("./routes/files1");
const files2Route = require("./routes/files2");
const files3Route = require("./routes/files3");
const files4Route = require("./routes/files4");
const uploadfilesRoute = require("./routes/uploadfiles");
const uploadfiles1Route = require("./routes/uploadfiles1");
const uploadfiles2Route = require("./routes/uploadfiles2");

// const fileUpload = require("express-fileupload");

dotenv.config();

main()
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use(express.json());

app.use(express.static("routes"));
app.use("/images", express.static("images"));

// app.use(fileUpload());

// // Upload Endpoint
// app.post("/upload", (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: "No file uploaded" });
//   }

//   const file = req.files.img;

//   file.mv(`${__dirname}/images/${file.name}`, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/images/${file.name}` });
//   });
// });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/upload", filesRoute);
app.use("/api/upload1", files1Route);
app.use("/api/upload2", files2Route);
app.use("/api/upload3", files3Route);
app.use("/api/upload4", files4Route);
app.use("/api/uploadfiles", uploadfilesRoute);
app.use("/api/uploadfiles1", uploadfiles1Route);
app.use("/api/uploadfiles2", uploadfiles2Route);

const port = process.env.PORT || 8800;

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
