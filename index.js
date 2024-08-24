const express = require("express");

const app = express();
const PORT = 3000;

app.get("/about", (req, res) => {
  res.send("hello ");
});
app.listen(PORT, () => `server started successfully at Port ${PORT}`);
