"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Please provide a valid email address.",
          },
          notEmpty: true,
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      wantLessons: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Contact",
    }
  );
  return Contact;
};
