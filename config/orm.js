const connection = require('./connection');

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = ob => {
    let arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {burger_name: 'Double Double'} => ["burger_name='Double Double'"]
        // e.g. {devoured: true} => ["devoured=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// Object for all our SQL statement functions.
const orm = {
    selectAll: (tableInput, cb) => {
      let queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: (table, col, val, cb) => {
      let queryString = `INSERT INTO ${table} (${col}) VALUES (?)`;
  
      console.log(queryString);
  
      connection.query(queryString, val, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {burger_name: California Chicken Burger, devoured: true}
    updateOne: (table, objColVals, condition, cb) => {
      let queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;