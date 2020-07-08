const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send('Hello World' + req.query.name);
});

module.exports = router;