////This is first I want to use jsonp solve CORS problem
// $(document).ready(function() {
//     // process the form
//     $('form').submit(function(event) {
//         // get the form data
//         // there are many ways to get this data using jQuery (you can use the class or id also)
//         var formData = {
//             'userId': $('input[name=userId]').val(),
//             'days': 365,
//             'startNum': 0,
//             'num': 200
//         };
//
//         // process the form
//         $.ajax({
//             type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//             async: true,
//             url: 'http://console.ccnu.edu.cn/ecard/getTrans', // the url where we want to POST
//             data: formData, // our data object
//             dataType: 'jsonp', // jsonp solve the CORS problem
//             jsonpCallback: "callbackName",
//             headers: {
//               "Accept" : "application/json",
//               "Content-Type" : "application/json"
//             }
//         })
//         .done(function(json) {
//           alert("success");
//         })
//         .fail(function(jqXHR) {
//           var data = jqXHR.responseXML;
//           console.log(data);
//         })
//         .always(function() {
//           alert("complete");
//         })
//         event.preventDefault();
//     });
// });
$("#form1").val(365);
$("#form2").val(0);
$("#form3").val(500);
