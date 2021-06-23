const express = require("express");
const app = express();
require("dotenv").config();
console.log(process.env.PORT);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 9000, () => {
    console.log(`Example app listening`);
});
