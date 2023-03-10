const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.static("./out"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/out", "index.html"));
})

app.listen(5000,()=>{
  console.log("Backend server is running")
})

module.exports = app;