const guests = require("../models/guest-model");

module.exports = {
  
    UpdateCity: async (req, res) => {
        try {
            if (await guests.exists({ phone: req.params.phone })) {
                return await guests.findByIdAndUpdate(req.params.phone, req.body)
                    .then(() => res.status(200).json({ success: true, message: "phone not found" }))
                    .catch((err) => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "phone not found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};