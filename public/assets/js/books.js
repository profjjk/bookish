$(document).ready(event => {
  if (event) console.info('Dom loaded')

  // UPDATE BOOK FINISHED STATUS
  // Create event listener.
  $('.book').on("click", () => {
    const id = $(this).attr('data-id');
    const status = $(this).attr('data-finished');
    let newStatus;

    if (status === true) {
      newStatus = { finished: false };
    } else {
      newStatus = { finished: true };
    }

    $.ajax({
      url: `/api/books/${id}`,
      type: `PUT`,
      data: newStatus,
    }).then(response => {
      if (response.ok) {
        console.log(`Changed book finished status to ${newStatus}`);
        location.reload('/');
      } else {
        alert(`Something went wrong`);
      }
    });
  });

  // CREATE NEW BOOK
  $('#add-btn').on("click", event => {
    event.preventDefault();

    const bookInfo = $('#new-book').val();

    const newBook = {
      book_info: bookInfo,
    }

    $.ajax({
      url: `/api/books`,
      type: `POST`,
      data: newBook
    }).then(response => {
      if (response.ok) {
        console.log(`A new book has been added`);
        location.reload('/');
      } else {
        alert(`Something went wrong`);
      }
    })
  })

  // DELETE BOOK
  $('#delete-btn').on("click", () => {
    const id = $(this).attr('data-id');

    $.ajax({
      url: `/api/books/${id}`,
      type: `DELETE`
    }).then(response => {
      if (response.ok) {
        console.log(`Book deleted`);
        location.reload('/');
      } else {
        alert(`Something went wrong`);
      }
    })
  })
});