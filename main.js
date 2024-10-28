const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

let count = 0;

function incrementCounter() {
    count +=1;
    counterDisplay.textContent = count;
}

incrementBtn.addEventListener('click', incrementCounter);


function showMessage2() {
  alert( "Привет, я JavaScript!" );
}
