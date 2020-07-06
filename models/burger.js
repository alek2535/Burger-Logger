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
    updateOne: (objColVals, condition, cb) => {
      orm.updateOne("burgers", objColVals, condition, res => {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  