const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      dob,
      gender,
      address,
      diseases,
      otherDisease,
      description,
      home_search
    } = req.body;


    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "البريد الإلكتروني مسجل مسبقًا." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      dob,
      gender,
      address,
      diseases,
      otherDisease,
      description,
      home_search,
    });

    // Save user to database
    await newUser.save();

    return res.status(201).json({ message: "تم التسجيل بنجاح." });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ message: "حدث خطأ في الخادم." });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "البريد الإلكتروني أو كلمة السر غير صحيحة." });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "البريد الإلكتروني أو كلمة السر غير صحيحة." });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Return token & user info
    res.json({
      message: "تم تسجيل الدخول بنجاح",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "حدث خطأ في الخادم." });
  }
};
