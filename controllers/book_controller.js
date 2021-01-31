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
  const id = req.params.id;
  let boolean = false;
  
  book.update(id, )
})

router.delete("/api/books/:id", function(req, res) {
  const id = req.params.id;
  book.delete([id], function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})

module.exports = router;