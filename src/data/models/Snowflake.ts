const flakesTotal = 250;
const flakes: any = [];
let mouseX = 0;
let mouseY = 0;
let wind = 0;

function update() {
  for (var i = flakes.length; i--; ) {
    var flake = flakes[i];
    flake.move();
    flake.draw();
  }

  //Move the snow flakes with every re-paint
  requestAnimationFrame(update);
}

class Snowflake {
  flakes: any;

  hit = false;
  melt = false;
  div: any = undefined;

  constructor(public size: any, public x: any, public y: any, public vx: any, public vy: any) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.hit = false;
    this.melt = false;
    this.div = document.createElement("div");
    this.div.classList.add("snowflake");
    this.div.style.width = this.size + "px";
    this.div.style.height = this.size + "px";
  }

  move = () => {
    if (this.hit) {
      if (Math.random() > 0.995) this.melt = true;
    } else {
      this.x += this.vx + Math.min(Math.max(wind, -10), 10);
      this.y += this.vy;
    }

    // Wrap the snowflake to within the bounds of the page
    if (this.x > window.innerWidth + this.size) {
      this.x -= window.innerWidth + this.size;
    }

    if (this.x < -this.size) {
      this.x += window.innerWidth + this.size;
    }

    if (this.y > window.innerHeight + this.size) {
      this.x = Math.random() * window.innerWidth;
      this.y -= window.innerHeight + this.size * 2;
      this.melt = false;
    }

    var dx = mouseX - this.x;
    var dy = mouseY - this.y;
    this.hit = !this.melt && this.y < mouseY && dx * dx + dy * dy < 2400;
  };

  draw = () => {
    this.div.style.transform = this.div.style.MozTransform = this.div.style.webkitTransform =
      "translate3d(" + this.x + "px" + "," + this.y + "px,0)";
  };

  static init = (container: any) => {
    for (var i = flakesTotal; i--; ) {
      var size = (Math.random() + 0.2) * 12 + 1;

      var flake: any = new Snowflake(
        size,
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.random() - 0.5,
        size * 0.3
      );
      container.appendChild(flake.div);
      flakes.push(flake);
    }

    container.onmousemove = function(event: any) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      wind = ((mouseX - window.innerWidth / 2) / window.innerWidth) * 6;
    };

    container.ontouchstart = function(event: any) {
      mouseX = event.targetTouches[0].clientX;
      mouseY = event.targetTouches[0].clientY;
      event.preventDefault();
    };

    window.ondeviceorientation = function(event) {
      if (event) {
        wind = event.gamma / 10;
      }
    };

    update();
  };
}

export default Snowflake;
