const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get("/health", (req, res) => {
    res.json({ status: "UP", traffic: "HIGH" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
