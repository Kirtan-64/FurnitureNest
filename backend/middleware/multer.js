const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize upload variable
const upload = multer({ storage: storage });

// Example route for uploading images
app.post("/upload", upload.single("image"), (req, res) => {
  try {
    res.status(200).send({ filePath: req.file.path });
  } catch (error) {
    res.status(400).send(error);
  }
});
