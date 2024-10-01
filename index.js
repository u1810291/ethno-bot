const express = require("express"); //load express module
const PORT = process.env.PORT || 4040;

const app = express(); 
app.use(express.json());
app.post("*", async (req, res) => {
    console.log(req.body);
    res.send("Hello Ethno");
});

app.get("*", async (req, res) => {
res.send("Hello, World!");
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
console.log("Server listening on PORT", PORT)
});