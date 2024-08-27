const { nanoid } = require("nanoid");
const URL = require("../models/url");
async function handleShortUrl(req, res) {
  try {
    const body = req.body;
    if (!body.url) {
      return res.status(400).json({ error: "url required" });
    }
    const shortID = nanoid(8);
    await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.json({ id: shortID });
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleShortUrl,
};
