import express from "express";

import { deleteUserById, getUserById, getUsers } from "../db/user";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log({ error });
    return res.status(400).send(`Error message: ${error}`);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deleteUser);
  } catch (error) {
    console.log({ error });
    return res.status(400).send(`Error message: ${error}`);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.status(400).send("Username is required");
    }

    const user = await getUserById(id);
    user.username = username;
    await user.save();

    return res.status(200).json(user).end;
  } catch (error) {
    console.log({ error });
    return res.status(400).send(`Error message: ${error}`);
  }
};
