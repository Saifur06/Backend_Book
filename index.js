
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGODB_URI = "mongodb+srv://businesswithsrm10_db_user:emQzz9ClddSzRMuI@cluster0.luklmat.mongodb.net/bookshelf?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
