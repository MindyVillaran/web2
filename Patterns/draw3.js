function Color(hue,saturation,lightness,alpha) {
  lineColor("hsla(" + hue + "," + saturation + "%," + lightness + "%," + alpha + ")") }

speed(0);

lineWidth(5)

function square(x) {
forward(x);
rotate(20);
forward(x);
rotate(30);
forward(x);
rotate(20);
forward(x);
rotate(30);
forward(x);
rotate(20);
forward(x);
rotate(30);
forward(x);
rotate(20);
forward(x);
rotate(30);
forward(x);
rotate(20);
forward(x);
rotate(30);
forward(x);
rotate(20);
}

function drawCircle(height) {
for(var x = 0; x < 80; x++) {
  Color(x*3,100,10, .1);
  moveTo(450,375);
  rotate(31);
  square(x);
}
}

for(var y = 0; y<6; y++){
drawCircle(y*200+30);
}
