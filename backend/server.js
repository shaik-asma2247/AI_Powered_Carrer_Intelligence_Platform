const dns = require("node:dns");
require("dotenv").config();

if (process.env.DNS_SERVERS) {
    dns.setServers(process.env.DNS_SERVERS.split(","));
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "CareerCast API is running successfully!"
    });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");

        app.listen(process.env.PORT || 5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    });
