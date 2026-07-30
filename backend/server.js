const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes = require("./routes/registrationRoutes"); 

app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes); 

app.listen(5000, () => {
    console.log("🚀 Server is running on port 5000");
});