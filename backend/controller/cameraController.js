import { where } from "sequelize";
import Camera from "../models/Camera.js";

export const getCameras = async (req, res) => {
    try {
        const response = await Camera.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getCameraById = async (req, res) => {
    try {
        const response = await Camera.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!response) {
            return res.status(404).json({ error: "Camera not found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createCamera = async (req, res) => {
    try {
        await Camera.create(req.body);
        res.status(201).json({ msg: "Camera Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateCamera = async (req, res) => {
    try {
        const camera = await Camera.findByPk(req.params.id);
        if (!camera) {
            return res.status(404).json({ error: "Camera not found" });
        }

        await Camera.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Camera Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteCamera = async (req, res) => {
    try {
        const camera = await Camera.findByPk(req.params.id);
        if (!camera) {
            return res.status(404).json({ error: "Camera not found" });
        }

        await Camera.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Camera Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};