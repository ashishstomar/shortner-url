const express = require("express");
const urlRoute = require("./routes/url");
const { connectMongoDB } = require("./connectdb");
const URL = require("./models/url");
const app = express();
const PORT = 3000;

connectMongoDB("mongodb://localhost:27017/url-shortner").then(() =>
  console.log("MongoDB connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () =>
  console.log(`server started successfully at Port ${PORT}`)
);
