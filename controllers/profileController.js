// server/controllers/profileController.js

export const getProfile = async (req, res) => {
  try {
    // If you're using JWT authentication, `req.user` comes from middleware
    const user = req.user;

    // If not using JWT yet, just send placeholder data
    res.status(200).json({
      message: "Profile fetched successfully",
      user: user || { name: "Demo User", email: "demo@example.com" },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
};
