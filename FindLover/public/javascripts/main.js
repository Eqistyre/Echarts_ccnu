$("#form1").val(365);
$("#form2").val(0);
$("#form3").val(500);

var hideVal = $("#out").val();
$("#result").hide();

if (hideVal != "") {
  $("#result").fadeIn(1500);
}
