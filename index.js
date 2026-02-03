const express = require("express");
const app = express();

app.use(express.json());

app.post("/serdipay/callback", (req, res) => {
    console.log("SerdiPay callback:", req.body);
    res.status(200).send("OK");
});

app.get("/", (req, res) => {
    res.send("Minerval API is running");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
