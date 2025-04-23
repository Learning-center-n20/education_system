import { Admin } from "../models/index.js";

export class AdminController {
  async createAdmin(req, res, next) {
    try {
      const body = req.body;
      const newAdmin = new Admin(body);
      await newAdmin.save();
      res.status(201).json({
        status: "success",
        message: "New Admin created",
        error: null,
        data: {
          newAdmin,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}
