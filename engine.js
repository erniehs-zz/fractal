var ctx = document.getElementById("grid").getContext("2d");

var ready = false;

const _resize = () => {
  ctx.canvas.width = ctx.canvas.parentElement.clientWidth;
  ctx.canvas.height = ctx.canvas.parentElement.clientHeight;
};

window.addEventListener("load", () => {
  _resize();
  if (ready) draw();
});

window.addEventListener("resize", () => {
  _resize();
  if (ready) draw(); // TODO throttle
});

window.addEventListener("load", () => {
  ready = true;
  var last = performance.now();
  var delta = 0;

  const _loop = (t) => {
    window.requestAnimationFrame(_loop);
    delta = t - last;
    last = t;
    update(delta / 1000.0);
    if (ready) draw();
  };

  _loop(performance.now());
});
