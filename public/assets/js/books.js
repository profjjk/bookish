$(document).ready(event => {
  if (event) console.info('Dom loaded')

  // CREATE NEW BOOK
  $('#add-btn').on("click", event => {
    event.preventDefault();

    const newBook = {
      book_info: $('#new-book').val().trim(),
    }

    $.ajax({
      url: `/api/books`,
      type: `POST`,
      data: newBook
    }).then(() => {
      console.log(`A new book has been added`);
      location.reload("/");
      $('#new-book').val("")
    })
  })

  // UPDATE BOOK
  $(document.body).on("click", '.book', (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id')
    const status = event.target.getAttribute('data-finished');
    let updBook = [];

    console.log("Status: " + status)

    if (status === "false") {
      updBook = {
        finished: true
      }
    } else if (status === "true") {
      updBook = {
        finished: false,
      }
    }

    console.log(updBook)

    $.ajax({
      url: `/api/books/${id}`,
      type: `PUT`,
      data: updBook,
    }).then(response => {
      console.log(`Changed book finished status`);
      location.reload('/');
    });
  });

  // DELETE BOOK
  $(document.body).on("click", '.delete', (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');

    $.ajax({
      url: `/api/books/${id}`,
      type: `DELETE`
    }).then(response => {
      console.log(`Book deleted`);
      location.reload('/');
    });
  });
});