const _mod = (x, y) => Math.abs(x % y);

const _randn = () => Math.random() - 0.5; // -0.5 to 0.5, more or less...

const _mid = (v) => v.reduce((a, c) => c.map((n, i) => n + (a[i] - n) / 2)); 

const _scale = (n) => Math.exp(-n / 1.7);

const _midp = (p1, p2) => Math.min(p1, p2) + Math.abs((p2 - p1) / 2);

const _subdivide = (i, frac, v1, v2, dh) => {
  const dv = _sub(v2, v1);
  if (_dot(dv, dv) == frac.dims.length) return;
  const mv = _mid([v1, v2]);
  frac.set(mv, _midp(frac.get(v1), frac.get(v2)) + _randn() * dh * _scale(i));
  _subdivide(i + 1, frac, v1, mv, dh);
  _subdivide(i + 1, frac, mv, v2, dh);
};

const _landscape = (frac, dh) => {
  frac.set([[0]], _randn() * dh);
  frac.set([frac.dims[0] - 1], _randn() * dh);
  _subdivide(0, frac, [0], [frac.dims[0] - 1], dh);
}

const DH = 50.0;
const DEPTH = 9;
const PTS = Math.pow(2, DEPTH) + 1;
var frac = _dim([PTS]);
_landscape(frac, DH);

const SZ = 2;
const Y = 600;

const draw = () => {
  ctx.fillStyle = "cornflowerblue";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = `yellow`;
  for (var x = 0; x < frac.dims[0]; x++) {
    if (frac.get([x])) ctx.fillRect(x * SZ, Y - SZ * frac.get([x]), SZ, SZ);
  }
};

const update = (dt) => {};
