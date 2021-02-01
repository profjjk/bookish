// EVENT LISTENERS & API REQUESTS
// ================================================
$(document).ready(event => {

  // Create a new book.
  $('#add-btn').on("click", event => {
    event.preventDefault();

    const newBook = {
      book_info: $('#new-book').val().trim(),
    }

    // Send post request.
    $.ajax({
      url: `/api/books`,
      type: `POST`,
      data: newBook
    }).then(() => {
      location.reload("/");
    })
  })

  // Update a book's finished status.
  $(document.body).on("click", '.book', (event) => {
    event.preventDefault();

    // Get id and status.
    const id = event.target.getAttribute('data-id')
    const status = event.target.getAttribute('data-finished');
    let updBook ;

    // Change status.
    if (status === "false") {
      updBook = {
        finished: true,
      }
    } else if (status === "true") {
      updBook = {
        finished: false,
      }
    }

    // Send put request.
    $.ajax({
      url: `/api/books/${id}`,
      type: `PUT`,
      data: updBook,
    }).then(response => {
      location.reload('/');
    });
  });

  // Delete book.
  $(document.body).on("click", '.delete', (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');

    $.ajax({
      url: `/api/books/${id}`,
      type: `DELETE`
    }).then(response => {
      location.reload('/');
    });
  });
});