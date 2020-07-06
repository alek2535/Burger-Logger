// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".submit").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        // event.preventDefault();
    
        let newBurger = {
          burger_name: $('#burger-text').val().trim()
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
          }
        );
      });

    $('#devour').on("click", function(event) {
      let id = $(this).data("id");
      let newDevour = $(this).data("devoured");
  
      let newDevourState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });