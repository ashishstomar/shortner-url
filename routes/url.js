const express = require("express");
const { handleShortUrl, handleGetAnalytics } = require("../controllers/url");

const router = express.Router();

router.post("/", handleShortUrl);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
