var div = document.getElementsByTagName('div')[0];
var input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', function() {
  div.innerHTML = input.value;
});