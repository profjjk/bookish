// DEPENDENCIES
// ================================================
const express = require('express');
const book = require('./../models/book.js')


// ROUTES
// ================================================
const router = express.Router();

// Display books on page.
router.get("/", function(req, res) {
  book.all(function(data) {
    const bookObj = {
      books: data
    }
    res.render("index", bookObj);
  });
});

// Post new book to database
router.post("/api/books", function(req, res) {
  book.insert([req.body.book_info],
    function(result) {
    res.json({ id: result.insertId })
  })
})

// Change finished status of a book.
router.put("/api/books/:id", function(req, res) {
  book.update(req.params.id, req.body.finished, function(result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})

// Delete book
router.delete("/api/books/:id", function(req, res) {
  book.delete([req.params.id], function(result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})


// ROUTES
// ================================================
module.exports = router;