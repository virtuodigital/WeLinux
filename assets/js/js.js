// scroll
$(document).ready(function(){
  $(".scroll").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  });
});



// check human
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.value = "1";
checkbox.name = "check-hum";
var div = document.getElementById("check-hum");
div.appendChild(checkbox);
checkbox.checked = false;


