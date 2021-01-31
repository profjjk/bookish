// DEPENDENCIES
// ================================================
const connection = require('connection');

const orm = {
  all: function(cb) {
    let queryString = `SELECT * FROM books;`
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  insert: function(value, cb) {
    let queryString = `
    INSERT INTO books (book_info)
    VALUES (${value}, false);`
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  update: function(id, boolean, cb) {
    let queryString = `
    UPDATE books SET finished = ${boolean}
    WHERE id = ${parseInt(id)}`
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  delete: function(id, cb) {
    let queryString = `
    DELETE FROM books
    WHERE id = ${parseInt(id)}`
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
}

module.exports = orm;