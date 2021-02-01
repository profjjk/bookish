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
      location.reload();
      $('#new-book').val("")
    })
  })

  // UPDATE BOOK
  $(document.body).on("click", '.book-info', () => {
    const id = $(this).attr('data-id');
    const status = $(this).attr('data-finished');
    let newStatus;

    if (status === true) {
      newStatus = { id: id, finished: false };
    } else {
      newStatus = { id: id, finished: true };
    }

    $.ajax({
      url: `/api/books/${id}`,
      type: `PUT`,
      data: newStatus,
    }).then(response => {
      console.log(`Changed book finished status to ${newStatus}`);
      location.reload('/');
    });
  });

  // DELETE BOOK
  $(document.body).on("click", '.delete', (event) => {
    event.preventDefault();
    const id = $(this).attr('data-id');
    console.log("Books: " + id);

    $.ajax({
      url: `/api/books/${id}`,
      type: `DELETE`
    }).then(response => {
      console.log(`Book deleted`);
      location.reload('/');
    });
  });
});