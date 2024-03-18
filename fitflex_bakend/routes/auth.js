// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const { test } = require("../controllers/authControllers");

// // middleware
// router.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:5173",
//   })
// );

// router.get("/", test);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authControllers");

// Route for user registration
router.post("/register", registerUser);

module.exports = router;
