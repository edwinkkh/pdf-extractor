const serverless = require('serverless-http');
const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const cors = require('cors')
const fileUpload = require('express-fileupload');

// parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parsing application/json
app.use(express.json());

// parsing multidata/form-data
app.use(upload.array());

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

// enable cors
app.use(cors());

const pdfRoutes = require("./routes/pdf");
app.use("/pdf", pdfRoutes);

app.get('/', (req, res) => res.send('Hello World!'))

module.exports.handler = serverless(app);
