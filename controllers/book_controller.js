// DEPENDENCIES
// ================================================
const express = require('express');
const book = require('./../models/book.js')

const router = express.Router();

// ROUTES
// ================================================
router.get("/", function(req, res) {
  book.all(function(data) {
    const bookObj = {
      books: data
    }
    res.render("index", bookObj);
  });
});

router.post("/api/books", function(req, res) {
  book.insert([req.body.book_info],
    function(result) {
    res.json({ id: result.insertId })
  })
})

router.put("/api/books/:id", function(req, res) {
  console.log("req.params.id: " + req.params.id)
  console.log("req.body.finished: " + req.body.finished)
  book.update(req.params.id, req.body.finished, function(result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})


router.delete("/api/books/:id", function(req, res) {
  book.delete([req.params.id], function(result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})

module.exports = router;