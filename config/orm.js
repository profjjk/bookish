// DEPENDENCIES
// ================================================
const connection = require('./connection');

const orm = {
  all: function(cb) {
    let queryString = `
    SELECT * FROM books
    ORDER BY id DESC;`
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  insert: function(value, cb) {
    let queryString = `
    INSERT INTO books (book_info)
    VALUES (?);`
    connection.query(queryString, value, function(err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  update: function(id, boolean, cb) {
    let queryString = `
    UPDATE books SET finished = ${boolean}
    WHERE id = ?;`
    connection.query(queryString, id, function(err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  delete: function(id, cb) {
    let queryString = `
    DELETE FROM books
    WHERE id = ?;`
    connection.query(queryString, id, function(err, res) {
      if (err) throw err;
      cb(res);
    })
  },
}

module.exports = orm;