// Back-end Logic
 var suggestion = function(q1, q2, q3, q4, q5) {
   return q1 + q2 + q3 + q4 + q5;
 }




// Front-end Logic
$(document).ready(function() {
  $("#suggestion").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q1").val());
    var q3 = parseInt($("#q1").val());
    var q4 = parseInt($("#q1").val());
    var q5 = parseInt($("#q1").val());
    var result = suggestion(q1, q2, q3, q4, q5);
    console.log (result)
  });




});
