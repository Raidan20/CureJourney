const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ message: "المستخدم غير موجود." });
    }

    res.json(user);
  } catch (error) {
    console.error("❌ Profile error:", error);
    res.status(500).json({ message: "حدث خطأ في الخادم." });
  }
});

module.exports = router;
