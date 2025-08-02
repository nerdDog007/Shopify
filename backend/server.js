const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const  bcrypt = require("bcryptjs");

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_DD_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/register",async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword =await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = new User({ name, email, password:hashedPassword });
  await user.save();
  res.send("User registered successfully");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));