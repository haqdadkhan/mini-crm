const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connectDB");

// port defination
const PORT = process.env.PORT || 3000;

// express app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Hello World!");
})

// connecting data base to server
connectDB();

// starting the server
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
