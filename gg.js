const input = document.getElementById('year');
let value = input.value;
const node_for_click = document.getElementById("for_click")

    function leapyear(){
    if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
        alert('Високосный');
      } else {
        alert('Невисокосный')
      }

node_for_click.addEventListener("click", leapyear)