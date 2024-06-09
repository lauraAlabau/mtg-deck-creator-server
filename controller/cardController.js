import express from "express";

import dotenv from "dotenv";
import { UserModel } from "../models/User.js";

dotenv.config({ path: "../config/.env" });

const CreateFavorite = async (req, res) => {
  const { id, ...favoriteData } = req.body;

  try {
    const findUser = await UserModel.findById(req.user._id);

    const favoriteExist = findUser.decks.find((fav) => fav.apiId === id);

    if (favoriteExist) {
      return res.status(400).json({
        errors: [{ msg: "Already in Favorites" }],
      });
    }

    findUser.favorites.push({ apiId: id, ...favoriteData });
    await findUser.save();

    return res
      .status(201)
      .json({ success: true, favorites: findUser.favorites });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const GetFavorites = async (req, res) => {
  try {
    const findUser = await UserModel.findById(req.user._id);
    const favorites = findUser.favorites;
    return res.status(200).json({ success: true, favorites: favorites });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};

const CreateDeck = async (req, res) => {
  const { id, ...deckData } = req.body;

  try {
    const findUser = await UserModel.findById(req.user._id);

    const cardExist = findUser.decks.find((deck) => deck.apiId === id);

    if (cardExist) {
      return res.status(400).json({
        errors: [{ msg: "Already in Deck" }],
      });
    }

    findUser.decks.push({ apiId: id, ...deckData });
    await findUser.save();

    return res.status(201).json({ success: true, decks: findUser.decks });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const GetDeck = async (req, res) => {
  try {
    const findUser = await UserModel.findById(req.user._id);
    const decks = findUser.decks;
    return res.status(200).json({ success: true, decks: decks });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};

const DeleteDeck = async (req, res) => {
  const { apiId } = req.body;

  try {
    const findUser = await UserModel.findById(req.user._id);

    const cardIndex = findUser.decks.findIndex((card) => card.apiId === apiId);

    findUser.decks.splice(cardIndex, 1);
    await findUser.save();

    return res.status(200).json({ success: true, decks: findUser.decks });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const CreateSideboard = async (req, res) => {
  const { apiId, ...sideBoardData } = req.body;

  try {
    const findUser = await UserModel.findById(req.user._id);

    const cardExist = findUser.sideboard.find((card) => card.apiId === apiId);

    if (cardExist) {
      return res.status(400).json({
        errors: [{ msg: "Already in Sideboard" }],
      });
    }

    findUser.sideboard.push({ apiId: apiId, ...sideBoardData });
    await findUser.save();

    return res.status(201).json({ success: true, decks: findUser.sideboard });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const GetSideboard = async (req, res) => {
  try {
    const findUser = await UserModel.findById(req.user._id);
    const sideboard = findUser.sideboard;
    return res.status(200).json({ success: true, sideboard: sideboard });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};

const DeleteSideboard = async (req, res) => {
  const { apiId } = req.body;

  try {
    const findUser = await UserModel.findById(req.user._id);

    const cardIndex = findUser.sideboard.findIndex(
      (card) => card.apiId === apiId
    );

    findUser.sideboard.splice(cardIndex, 1);
    await findUser.save();

    return res
      .status(200)
      .json({ success: true, sideboard: findUser.sideboard });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

export {
  CreateFavorite,
  CreateDeck,
  GetFavorites,
  GetDeck,
  DeleteDeck,
  CreateSideboard,
  GetSideboard,
  DeleteSideboard,
};
