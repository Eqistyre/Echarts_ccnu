$(document).ready(function() {
    // process the form
    $('form').submit(function(event) {
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'userId': $('input[name=userId]').val(),
            'days': 365,
            'startNum': 0,
            'num': 500
        };

        function initialize() {
          console.log("sddddd");
        }
        // process the form
        $.ajax({
            type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
            async: true,
            url: 'http://console.ccnu.edu.cn/ecard/getTrans', // the url where we want to POST
            data: formData, // our data object
            dataType: 'jsonp', // jsonp solve the CORS problem
        })
        .done(function(json) {
          alert("success");
        })
        .fail(function(json) {
          console.log(json);
        })
        .always(function() {
          alert("complete");
        });
        event.preventDefault();
    });
});
