"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    isAccepted: { type: DataTypes.BOOLEAN, defaultValue: false },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true }
    },
    acceptedBy: {
      type: DataTypes.STRING,
      validate: { len: [1] }
    },
    startTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true }
    },
    endTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    payRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { isNumeric: true }
    }
  });
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};
