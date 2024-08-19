const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require('cors');
const port = 5000;
const appointmentRoute = require("./routes/appointmentRoute.js");
const userRoute = require("./routes/usersRoute.js");
const departmentRoute = require("./routes/departmentRoute.js");
const doctorRoute = require('./routes/doctorRoute.js')
const app = express();
app.use(express.json());
 app.use(cors({
  origin:["http://localhost:5173","http://localhost:5174"]
 }))
app.get("/", async (req, res) => {
  res.send("working server recure");
});

app.use("/api/appointment", appointmentRoute);
app.use("/api/user", userRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/department", departmentRoute);
const url = `mongodb+srv://safara:safara@cluster0.t9lecvs.mongodb.net/recure-API?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(url)
  .then(() => {
    // listen for request
    console.log("Successfully Connected to DB");
    app.listen(5000, () => {
      console.log(`running server ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
