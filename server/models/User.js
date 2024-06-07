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
      type: Schema.Types.Mixed,
      ref: "Card",
    },
  ],
  decks: [
    {
      type: Schema.Types.Mixed,
      ref: "Card",
    },
  ],
  sideboard: [
    {
      type: Schema.Types.Mixed,
      ref: "Card",
    },
  ]
})

export const UserModel = model("User", UserSchema);