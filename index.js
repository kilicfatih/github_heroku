const express = require("express");
const app = express();

app.use(express.static(__dirname+"/yayin"));

app.get("/", (req, res)=>{
    res.send("merhaba express");
});



app.get("/sayfa", (req, res)=>{
    res.send("<body>merhaba</body>")
})

app.listen(6060)