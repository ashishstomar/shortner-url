const express = require("express");
const urlRoute = require("./routes/url");
const { connectMongoDB } = require("./connectdb");
const URL = require("./models/url");
const path = require("path");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const { allowLoggedInUserOnly } = require("./middlewares/auth");

const app = express();
const PORT = 3000;

connectMongoDB("mongodb://localhost:27017/url-shortner").then(() =>
  console.log("MongoDB connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.use("/user", userRoute);
app.use("/url", allowLoggedInUserOnly, urlRoute);
app.use("/", staticRoute);

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
    },
    { new: true }
  );
  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirectURL);
});

app.listen(PORT, () =>
  console.log(`server started successfully at Port ${PORT}`)
);
