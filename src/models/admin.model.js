import { DataTypes } from "sequelize";
import { database } from "../config/db.js";

export const Admin = database.define(
  "Admin",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [6, 30],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 30],
      },
    },
    role: {
      type: DataTypes.ENUM("superadmin", "admin", "student"),
      allowNull: false,
      defaultValue: "student",
    },
  },
  {
    underscored: true,
    tableName: "admins",
  }
);
