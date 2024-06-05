import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
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
  ]
})

export const UserModel = model("User", UserSchema);