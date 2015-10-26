speed(0);

lineWidth(6);


function zigzag(x) {
rotate(120);
forward(x);
rotate(-120);
forward(x);
rotate(120);
forward(x);
rotate(-120);
forward(x);
rotate(9);
}

function drawRow(offset) {
  for(var x = 0; x < 200; x++) {
    moveTo(x*15,offset);
    zigzag(20);
  }
}

for(var y = 0; y<20; y++){
drawRow(y*30+60);
}
