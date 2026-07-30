smartaihub
│
├── index.html
├── logo.png
└── server.js
const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("SmartAI Hub server ishlayapti");
});


app.listen(3000, () => {
    console.log("Server ishga tushdi");
});
