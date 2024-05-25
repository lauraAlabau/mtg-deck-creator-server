import { CardModel } from "db/models/card";

export const getCards = () => CardModel.find();

export const getCardByName = (name: string) => CardModel.findOne({ name });

export const createCard = (values: Record<string, any>) =>
  new CardModel(values).save().then((card) => card.toObject());
