const orm = require("../config/orm");

const burger = {
    selectAll: cb => {
      orm.selectAll("burgers", res => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: (col, val, cb) => {
      orm.insertOne("burgers", col, val, res => {
        cb(res);
      });
    },
    updateOne: (objColVal, condition, cb) => {
      orm.updateOne("burger", objColVal, condition, res => {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  