$(document).ready(function() {
  // this function reveals the madlib
  $(".btn").click(function() {
    // these methods will assign the form inputs to the proper class in the MadLib
    $(".noun1").text($("input#noun1").val());
    $(".noun2").text($("input#noun2").val());
    $(".location1").text($("input#location1").val());
    $(".location2").text($("input#location2").val());
    $(".verb1").text($("input#verb1").val());
    $(".place1").text($("input#place1").val());
    $(".pastVerb").text($("input#pastVerb").val());
    $(".stateOfBeing").text($("input#stateOfBeing").val());
    $(".name").text($("name").val());
    // this method reveals the madlib
    $(".madlib").show();
    // this event prevents the page from refreshing when the button is pushed
    event.preventDefault();
  });

});
