import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: ["passenger", "driver", "operator"],
      default: "passenger",
      required: true,
    },
    phone: { type: String },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?w=740&t=st=1705830725~exp=1705831325~hmac=818925358a1f4c4098339bb59e4428ec47fd33441948cb0ee24e7c4254b8bdba",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
