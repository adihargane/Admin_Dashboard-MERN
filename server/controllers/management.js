import mongoose from "mongoose"
import User from "../models/User.js"

export const getAdmins = async (req, res) => {
    try{
        const admin = await User.find({ role: "admin" }).select("-password");
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};