$(function() {

  $("body").on('click', "#submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
  });



  $("body").on("click", ".devourit", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data(".devourit");

    var newBurgerState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed sleep to", newBurgerState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });



})