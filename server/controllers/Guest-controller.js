const guests = require("../models/guest-model");

module.exports = {
    GetGuests: async (req, res) => {
        try {
            const data = await guests.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no guests found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    UpdateGuest: async (req, res) => {
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
    },
    
    AddGuest: async (req, res) => {
        try {
            const { firstName, lastName, isarrive, amount, phone } = req.body;
            const guest = new guests({ firstName, lastName, isarrive, amount, phone });
            if (!guest) return res.status(400).json({ success: false, message: "guest is not valid" })

            await guests.create(guest)
                .then(() => res.status(201).json({ success: true, message: "guest successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

};