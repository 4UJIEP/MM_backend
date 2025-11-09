import { Request, Response } from "express";
import * as UserService from "./user.service";

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await UserService.getAll();
    res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const user = await UserService.getById(parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");
    res.json(user);
}