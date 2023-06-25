const express = require("express");
const dotenv = require("dotenv");
const connectionDB = require("./config/db");
const userRoutes = require("./routes/user.routes")
const cors = require('cors');

const app = express();
dotenv.config();
connectionDB();
app.use(cors());

app.use(express.json());

app.get("/",(req, res)=>{
    console.log("ok");
})

app.use("/api/user", userRoutes);

const port = process.env.PORT || 8001
app.listen(port, console.log("server is running at post = ", port));