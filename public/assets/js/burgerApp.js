$(function () {

    $(".addBurger-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //console.log("$('#burger').val().trim()", $("#burger").val().trim());

        let burgerInput = [$("#burger").val().trim()]

        var newBurger = {
            burger: burgerInput
        }
        // Send the POST request.
        $.ajax("/api/add", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".DeleteBtn").on("click", function (event) {

        var id = $(this).data("id");
        console.log("id", id);

        var selectedId = {
            id: id
        }

        // Send the POST request.
        $.ajax("/api/devour", {
            type: "POST",
            data: selectedId
        }).then(
            function () {
                console.log("Devoured burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
