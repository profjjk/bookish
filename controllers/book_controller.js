// DEPENDENCIES
// ================================================
const express = require('express');
const book = require('/../models/book.js')

const router = express.Router();

// ROUTES
// ================================================
router.get("/", function(req, res) {
  book.all(function(data) {
    const bookObj = {
      books: data
    }
    console.log(bookObj);
    res.render("index", bookObj);
  });
});

router.post("/api/books", function(req, res) {
  book.insert(req.body.newBook, function(result) {
    res.json({ id: result.insertId })
  })
})

router.put("/api/books/:id", function(req, res) {
  const id = req.params.id;
  let boolean = false;
  
  book.update(id, )
})

module.exports = router;