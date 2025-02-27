const mongoose = require("mongoose");

const logisticsSchema = new mongoose.Schema({
    pickupLocation: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        coordinates: {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true },
        },
    },
    dropLocation: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        coordinates: {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true },
        },
    },
    vehicleType: {
        type: String,
        enum: ["Truck", "Van", "Bike", "Ship", "Air Cargo"],
        required: true,
    },
    cargoWeight: {
        type: Number,
        required: true,
        min: 1, // Minimum 1kg cargo
        max: 50000, // Maximum weight (adjust as needed)
    },
    createdAt: { type: Date, default: Date.now },
});

const Logistics = mongoose.model("Logistics", logisticsSchema);

module.exports = Logistics;
