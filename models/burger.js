var orm = require("../config/orm.js");

var burger = {
    // all: function(cb) {
    //   orm.all("cats", function(res) {
    //     cb(res);
    //   });
    // },
    // The variables cols and vals are arrays.
    selectAll: function(cols, vals, cb) {
      orm.selectAll("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    insertOne: function(objColVals, condition, cb) {
      orm.insertOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    updateOne: function(condition, cb) {
      orm.updateOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };



module.exports = burger;