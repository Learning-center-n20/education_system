import { Admin } from "../models/index.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { handleError } from "../utils/errorHendeler.js";
import jwt from "jsonwebtoken";

export class AdminController {
  async _createAdmin(body, res, role) {
    try {
      const hashedPassword = await hashPassword(body.password);

      const newAdmin = await Admin.create({
        ...body,
        role,
        password: hashedPassword,
      });

      return res.status(201).json({
        status: "success",
        message: `${role} created successfully`,
        error: null,
        data: { newAdmin },
      });
    } catch (error) {
      handleError(error, res);
    }
  }

  async createSuperAdmin(req, res) {
    return this._createAdmin(req.body, res, "superadmin");
  }

  async createAdmin(req, res) {
    return this._createAdmin(req.body, res, "admin");
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ where: { email } });

      if (!admin) {
        return res.status(404).json({
          status: "fail",
          message: "Admin not found",
        });
      }

      const isMatch = await comparePassword(password, admin.password);
      if (!isMatch) {
        return res.status(401).json({
          status: "fail",
          message: "Invalid password",
        });
      }

      const token = jwt.sign(
        { id: admin.id, role: admin.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        status: "success",
        message: "Logged in successfully",
        data: { token },
      });

    } catch (error) {
      handleError(error, res);
    }
  }
}
