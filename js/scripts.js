// Back-end Logic
 var suggestion = function(q1, q2, q3, q4, q5) {
   return q1 + q2 + q3 + q4 + q5;
 }






// Front-end Logic
$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("#q1").val());
    console.log(q1);
    var q2 = parseInt($("#q2").val());
    console.log(q2);
    var q3 = parseInt($("#q3").val());
    console.log(q3);
    var q4 = parseInt($("#q4").val());
    console.log(q4);
    var q5 = parseInt($("#q5").val());
    console.log(q5);
    var result = parseInt(suggestion(q1, q2, q3, q4, q5));
    console.log(result);

    $("#output").show().text(result);
    $("#output").show();
  });




});
