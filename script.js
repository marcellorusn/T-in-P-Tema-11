let stare = false;
let intervalID = null;
let zona1Color, zona2Color;
let btnStart, btnStop;

function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  zona1Color = color(150);
  zona2Color = color(150);

  // Buton START
  btnStart = createButton('START');
  btnStart.position(width / 2 - 80, height + 10);
  btnStart.class('bg-blue-500 text-white px-4 py-2 rounded');
  btnStart.mousePressed(porneste);

  // Buton STOP
  btnStop = createButton('STOP');
  btnStop.position(width / 2 + 20, height + 10);
  btnStop.class('bg-red-600 text-white px-4 py-2 rounded');
  btnStop.mousePressed(opreste);
}

function draw() {
  background(240);

  // Zona 1
  fill(zona1Color);
  rect(90, 50, 80, 50, 10);

  // Zona 2
  fill(zona2Color);
  rect(230, 50, 80, 50, 10);
}

function schimbaCulori() {
  if (stare) {
    zona1Color = color('#ef4444');
    zona2Color = color('#3b82f6');
  } else {
    zona1Color = color('#3b82f6');
    zona2Color = color('#ef4444');
  }
  stare = !stare;
}

function porneste() {
  schimbaCulori();
  if (!intervalID) {
    intervalID = setInterval(schimbaCulori, 1000);
  }
}

function opreste() {
  clearInterval(intervalID);
  intervalID = null;
}
