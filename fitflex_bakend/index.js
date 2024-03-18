// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");

// const app = express();

// app.use('/',require('./routes/auth'))

// const port = 8000;
// app.listen(port, () => console.log(`server is running on ${port}`));

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB URL)
mongoose.connect(
  "mongodb+srv://upeshkr7:xaBHqhV5PlMiJvZo@cluster0.1ugcwyu.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Include the "auth" routes
app.use("/auth", require("./routes/auth"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
