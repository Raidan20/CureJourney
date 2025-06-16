const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "رمز التوثيق مفقود أو غير صالح." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info to request
    next();
  } catch (error) {
    console.error("❌ Token error:", error);
    res.status(401).json({ message: "رمز التوثيق غير صالح أو منتهي." });
  }
};

module.exports = authMiddleware;
