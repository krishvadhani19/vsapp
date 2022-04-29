const jwt = require("jsonwebtoken");
const jwtSecret = "krishVadhani19";

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token!" });
  }
  try {
    const data = jwt.verify(jwtSecret, token);
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Servor Error!");
  }
};

module.exports = fetchUser;
