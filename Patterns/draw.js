speed(0)

function Color(hue,saturation,lightness,alpha) {
  lineColor("hsla(" + hue + "," + saturation + "%," + lightness + "%," + alpha + ")") }

function square(x) {
forward(x);
rotate(90);
forward(x);
rotate(90);
forward(x);
rotate(90);
forward(x);
rotate(90);
}

function drawCircle(height) {
for(var x = 0; x < 400; x++) {
  Color(x*.8,100,60, .7);
  moveTo(300,300);
  rotate(17);
  square(190);
}
}

for(var y = 0; y<6; y++){
drawCircle(y*200+30);
}
