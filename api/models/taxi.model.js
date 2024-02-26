import mongoose from "mongoose";

const taxiSchema = new Schema(
  {
    driverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    licensePlate: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["AVAILABLE", "BUSY"],
      default: "AVAILABLE",
    },
    currentLocation: {
      type: { latitude: Number, longitude: Number },
      required: true,
    },
    lastActiveTime: {
      type: Date,
      default: Date.now,
    },
    vehicleDetails: {
      make: { type: String, required: true },
      color: { type: String, required: true },
      capacity: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

const Taxi = mongoose.model("Taxi", taxiSchema);
export default Taxi;
