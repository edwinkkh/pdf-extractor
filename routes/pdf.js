const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require("path");
const pdf = require('pdf-parse');
const mammoth = require("mammoth");

router.get("/", (req, res) => {
  
    
    const path2 = path.join(__dirname,"test.docx");
    
    mammoth.convertToHtml({path:path2})
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages;
        res.send(html);
    })
    .done();
});

module.exports = router;