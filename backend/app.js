const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/stores", require("./routes/store"));
app.use("/api/ratings", require("./routes/rating"));
app.use("/api/admin", require("./routes/admin"));

module.exports = app;