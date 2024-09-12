const jwt = require("jsonwebtoken");
const secret = "Super$ecret";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
