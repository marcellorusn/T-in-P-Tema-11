const zona1 = document.getElementById('zona1');
const zona2 = document.getElementById('zona2');
let stare = false;
let intervalID;

function schimbaCulori() {
  if (stare) {
    zona1.className = 'w-24 h-12 bg-red-500';
    zona2.className = 'w-24 h-12 bg-blue-500';
  } else {
    zona1.className = 'w-24 h-12 bg-blue-500';
    zona2.className = 'w-24 h-12 bg-red-500';
  }
  stare = !stare;
}

function porneste() {
  schimbaCulori(); // se schima imediat
  intervalID = setInterval(schimbaCulori, 1000); // apoi la 1 secunda
}

function opreste() {
  clearInterval(intervalID);
}
