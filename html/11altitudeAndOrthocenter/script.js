const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(300,500,20,"green");

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

  k.defineLineWithTwoPoints(A,B);
  l.defineLineWithTwoPoints(B,C);
  m.defineLineWithTwoPoints(C,A);

  S.distanceToAnOtherPoint(A);

  S.x = p.intersection(q).x;
  S.y = p.intersection(q).y

  p.slope = -1/k.slope;
  p.intercept = C.y - p.slope*C.x;

  q.slope = -1/m.slope;
  q.intercept = B.y - q.slope*B.x;

  r.slope = -1/l.slope;
  r.intercept = A.y - r.slope*A.x;

  p.draw(context);
  q.draw(context);
  r.draw(context);

  k.draw(context);
  l.draw(context);
  m.draw(context);

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
