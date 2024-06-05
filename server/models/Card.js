import { Schema, model } from "mongoose";

const CardSchema = new Schema(
  {
    name: String,
    image: String,
    mana_cost: String,
    cmc: Number,
    type_line: String,
    oracle_text: String,
    power: String,
    toughness: String,
    apiId: String
  },
  {
    timestamps: true,
  }
);


export const CardModel = model("Card", CardSchema);
