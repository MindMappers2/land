const models = require("../models/models");

const contactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const newData = new models({name, email, subject ,message } )
    await newData.save()
    return res.status(200).json({ message: "Message received! Thank you for contacting." });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Server error. Please try again later.", details: error.message });
  }
};

module.exports = { contactForm };
