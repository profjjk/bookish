// DEPENDENCIES
// ================================================
const orm = require('./../config/orm.js');

const book = {
  all: function(cb) {
    orm.all(function(res) {
      cb(res);
    });
  },
  insert: function(value, cb) {
    orm.insert(value, function(res) {
      cb(res);
    });
  },
  update: function(id, boolean, cb) {
    orm.update(id, boolean, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    console.log("Book: " + id)
    orm.delete(id, function(res) {
      cb(res);
    });
  },
}

module.exports = book;