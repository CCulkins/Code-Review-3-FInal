var pingPong = function(userInput) {
var arrayList = [];

for (var i = 1; i <= userInput; i++) {

if  (i % 3 === 0 && i % 5 === 0) {
    arrayList.push("pingpong");
  } else if (i % 5 === 0) {
    arrayList.push("pong");
  } else if (i % 3 === 0) {
    arrayList.push("ping");
  } else {
    arrayList.push(i);
  };
};
console.log(arrayList);
return arrayList;
};

$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var inputUser = $("input#userInput").val();
    var pongResults = pingPong(inputUser);

    $('#showResults').empty();
    $('#showResults').show();

    pongResults.forEach(function(showResult){
      $('#showResults').append("<li>" + pongResults + "</li>");
    });
    event.preventDefault();
  });
});
