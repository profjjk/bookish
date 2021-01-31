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
  update: function(boolean, id, cb) {
    orm.update(boolean, id, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.delete(id, function(res) {
      cb(res);
    });
  },
}

module.exports = book;