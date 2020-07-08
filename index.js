const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();

// parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parsing application/json
app.use(express.json());

// parsing multidata/form-data
app.use(upload.array());

const pdfRoutes = require("./routes/pdf");
app.use("/pdf", pdfRoutes);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(4000);
