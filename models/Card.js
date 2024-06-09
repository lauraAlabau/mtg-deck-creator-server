import { Schema, model } from "mongoose";

const CardSchema = new Schema(
  {
    apiId: { type: String, required: true, unique: true },
    cardmarket_id: { type: Number },
    cmc: { type: Number },
    color_identity: { type: Array },
    colors: { type: Array },
    digital: { type: Boolean },
    finishes: { type: Array },
    foil: { type: Boolean },
    flavor_text: { type: String },
    full_art: { type: Boolean },
    games: { type: Array },
    image_uris: { type: Object },
    lang: { type: String },
    layout: { type: String },
    legalities: { type: Object },
    mana_cost: { type: String },
    name: { type: String },
    oracle_text: { type: String },
    power: { type: String },
    toughness: { type: String },
    prices: { type: Object },
    produced_mana: { type: Array },
    promo: { type: Boolean },
    purchase_uris: { type: Object },
    rarity: { type: String },
    related_uris: { type: Object },
    reprint: { type: Boolean },
    set: { type: String },
    set_name: { type: String },
    type_line: { type: String },
    amount_deck: { type: String },
    amount_sideboard: { type: String },
  },
  {
    timestamps: true,
  }
);

export const CardModel = model("Card", CardSchema);
