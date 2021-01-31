// DEPENDENCIES
// ================================================
const connection = require('./connection');

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
    VALUES (?);`
    connection.query(queryString, value, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  update: function(boolean, id, cb) {
    let queryString = `
    UPDATE books SET finished = (?)
    WHERE id = (?)`
    connection.query(queryString, boolean, id, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  delete: function(id, cb) {
    let queryString = `
    DELETE FROM books
    WHERE id = (${parseInt('?')})`
    connection.query(queryString, value, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
}

module.exports = orm;