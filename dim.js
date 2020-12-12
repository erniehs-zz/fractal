const _add = (a, b) => a.map((n, i) => n + b[i]);

const _sub = (a, b) => a.map((n, i) => n - b[i]);

const _hadmard = (a, b) => a.map((n, i) => n * b[i]);

const _dot = (a, b) => _hadmard(a, b).reduce((a, c) => a + c);

const _splod = (coord, dims) => coord.reduce((a, c, i) => a + c * dims[i - 1]); // for want of a better name

const _dim = (v) => {
  const _dims = Array.from(v);

  var _arry = new Array(v.reduce((a, c) => a * c));

  const _get = (coord) => _arry[_splod(coord, _dims)];

  const _set = (coord, c) => (_arry[_splod(coord, _dims)] = c);

  return {
    dims: _dims,

    a: _arry,

    get: _get,

    set: _set,
  };
};
