$(document).ready(event => {
  if (event) console.info('Dom loaded')

  // UPDATE BOOK FINISHED STATUS
  const books = $('.book');
  // Create event listener.
  if (books) {
    books.on("click", () => {
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
        type: "PUT",
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
  };

  // CREATE NEW BOOK
});