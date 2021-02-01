// DEPENDENCIES
// ================================================
const connection = require('./connection');

const orm = {
  all: function(cb) {
    let queryString = `
    SELECT * FROM books
    ORDER BY id DESC;`
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
  update: function(id, boolean, cb) {
    let queryString = `
    UPDATE books SET finished = (?)
    WHERE id = (?);`
    connection.query(queryString, boolean, id, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  delete: function(id, cb) {
    console.log("ORM: " + id)
    let queryString = `
    DELETE FROM books
    WHERE id = (?);`
    connection.query(queryString, id, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
}

module.exports = orm;