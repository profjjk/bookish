$(document).ready(event => {

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
      location.reload("/");
    })
  })

  // UPDATE BOOK
  $(document.body).on("click", '.book', (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id')
    const status = event.target.getAttribute('data-finished');
    let updBook ;

    console.log("ID: " + id)
    console.log("Status: " + status)

    if (status === "false") {
      updBook = {
        finished: true,
      }
    } else if (status === "true") {
      updBook = {
        finished: false,
      }
    }

    $.ajax({
      url: `/api/books/${id}`,
      type: `PUT`,
      data: updBook,
    }).then(response => {
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
      location.reload('/');
    });
  });
});