const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json([{ name: "luan" }, { name: "renas" }]);
});

app.listen("3001");
