const each = (fn, col) => {
  return col ? _each(fn, col) : (col) => _each(fn, col)
}

const _each = (fn, col) => {
    if (typeof col !== "object") { return }
  
  const arr = Array.isArray(col) ? col : Object.values(col) 
  
  const max = arr.length
  var i = -1
  
  while (++i < max)
    if (fn(arr[i], i, col) === false)
      break
  
  return col
}

// HELPERS

Object.prototype.values = (o) => Object.keys(o).map(key => o[key])
