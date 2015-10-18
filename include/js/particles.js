// (function(){
  canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  var ink = "#29282E";
  var speed = 4;
  var size = 80;
  var flow = false;
  generatorStock = [];

  generatorStock.push(new particleGenerator(W/2, H/2, speed, speed, 20));
  generatorStock.push(new particleGenerator(0, 0, speed, speed, 20));

  function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
  }

  function particle(x, y, vx, vy) {
    this.radius = randomInt(size-20, size);
    this.x = x;
    this.y = y;
    this.alpha = 1;
    // this.angle = 0;
    // this.offset = randomInt(100, 200);
    this.vx = randomInt(-speed, speed);
    this.vy = randomInt(-speed, speed);
    this.lifetime = 100;
  }
  particle.prototype.update = function() {
    // this.angle += 10;
    this.lifetime -= 2;

      this.x += this.vx;// W/2*this.offset + Math.cos(this.angle);
      this.y += this.vy; //H/2 + this.offset + Math.sin(this.angle);
    if (this.lifetime < 40 && !flow){
      this.radius -= 2;
      this.alpha -= 0.007;
    }

    context.beginPath();
    context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    context.fillStyle = ink; //"#881F49";
    context.fill();
    context.closePath();

  }

  function particleGenerator(x, y, vx, vy, maxParticles) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.maxParticles = maxParticles;
    this.particles = [];
  }
  var freq = 0.5;
  particleGenerator.prototype.animate = function() {
    // console.log(this.particles.length)
    if (this.particles.length < this.maxParticles && Math.random() < freq)  {
      this.particles.push(new particle(this.x, this.y, this.vx, this.vy));
      if(this.particles.length == this.maxParticles/2){
        freq = 0.1;
      }
    }
    for (var i = 0; i < this.particles.length; i++) {
      p = this.particles[i];
      p.update();
      if (p.radius < 10) {
        this.particles[i] = new particle(this.x, this.y, this.vx, this.vy);
      }  
    }
  }

  function burst() {
    flow = true;
    ink = "#881F49";
    speed = 20;
    // size = 450;
  }

  function update() {
    context.clearRect(0, 0, W, H);

    for (var i = 0; i < generatorStock.length; i++) {
      generatorStock[i].animate();
    }
    requestAnimationFrame(update);
  }                        

  update();

  window.addEventListener('resize', function(e) {
    W = window.innerWidth;
    H = window.innerHeight;
  }, false);


// })();