// -comment out return false on line 19 scripts.js
// -add arrayList.push(index) instead, because you
// want to push the numbers that dont get replaced
// with pingpongs.
//
// -add parseInt to input in jQuery to get a number
// value instead of strong value, that way function can read it.
//
// -add forEach loop to jquery to replace show. you want to take each number and append them individually.


 var pingPong = function(userInput) {
 var arrayList = [];

 for (var i = 0; i < userInput; i++)


 if  ((userInput % 3) === 0 && ((userInput % 5) === 0) {
   arrayList.push("pingpong");

 } else if ((userInput % 5) === 0) {
   arrayList.push("pong");

 } else if ((userInput % 3) === 0) {
   arrayList.push("ping");

} else {
  arrayList.push(i)
  // index
// return false;
}
return arrayList;
};

$(document).ready(function() {
  $('form#userForm').submit(function(event) {

    var inputUser = parseInt($("input#userInput").val());
    var pongResult = pingPong(inputUser);

    $("#pongResult").empty();

    pongResult.forEach(function(result){
      $("#showResults").append("<li>" + result + "</li>")
    });

    // $('.inputLabel').append(inputUser);
    // $('#showResults').show();
    event.preventDefault();
  });
});
