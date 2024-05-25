import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Username is required."],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required."],
    unique: true,
  },
  authentication: {
    password: {
      type: String,
      required: [true, "Password is required."],
      select: false,
    },
    salt: {
      type: String,
      select: false,
    },
    sessionToken: {
      type: String,
      select: false,
    },
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
  decks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
  sideboard: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});

export const UserModel = model("User", userSchema);
