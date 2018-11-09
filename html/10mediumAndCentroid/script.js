const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(300,500,20,"green");

let AB = new Point(0,0,10,"White");
let BC = new Point(0,0,10,"White");
let AC = new Point(0,0,10,"White");

let S = new Point(0,0,20,"Black");

let k = new LinearFunction(1,1);
let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

let p = new LinearFunction(1,1);
let q = new LinearFunction(1,1);
let r = new LinearFunction(1,1);

A.drag(); B.drag();C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  p.defineLineWithTwoPoints(A,BC);
  q.defineLineWithTwoPoints(B,AC);
  r.defineLineWithTwoPoints(C,AB);

  k.defineLineWithTwoPoints(A,B);
  l.defineLineWithTwoPoints(B,C);
  m.defineLineWithTwoPoints(C,A);

  S.x = p.intersection(q).x;
  S.y = p.intersection(q).y

  AB.x = (A.x + B.x) / 2;
  AB.y = (A.y + B.y) / 2;

  BC.x = (B.x + C.x) /2;
  BC.y = (B.y + C.y) /2;

  AC.x = (A.x + C.x) /2;
  AC.y = (A.y + C.y) /2;

  p.draw(context);
  q.draw(context);
  r.draw(context);

  k.draw(context);
  l.draw(context);
  m.draw(context);

  AB.draw(context);
  BC.draw(context);
  AC.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);

  S.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");

  S.printText("S");
}

animate();
