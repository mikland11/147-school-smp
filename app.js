const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Cloud {
  constructor(x, y, scale, speed) {
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.speed = speed;
  }
  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20*this.scale, 0, Math.PI*2);
    ctx.arc(this.x+25*this.scale, this.y+10*this.scale, 25*this.scale, 0, Math.PI*2);
    ctx.arc(this.x-25*this.scale, this.y+10*this.scale, 25*this.scale, 0, Math.PI*2);
    ctx.fill();
  }
  update() {
    this.x += this.speed;
    if (this.x - 50*this.scale > canvas.width) this.x = -50*this.scale;
    this.draw();
  }
}

const clouds = [];
for(let i=0;i<15;i++){
  clouds.push(new Cloud(Math.random()*canvas.width, Math.random()*canvas.height*0.6, Math.random()*1+0.5, Math.random()*0.5+0.2));
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let c of clouds) c.update();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
