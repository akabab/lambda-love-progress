const each = (fn, collection) => {
  return collection ? _each(fn, collection) : (collection) => _each.apply(this, [fn, collection])
}

const _each = (fn, collection) => {
	if (typeof collection !== "object") { return }
  
  var arr = Array.isArray(collection) ? collection : Object.values(collection) 
  
  const max = arr.length
  var i = -1
  
  while (++i < max)
    if (fn(arr[i], i, collection) === false)
      break
  
  return collection
}

// HELPERS

Object.prototype.values = (obj) => Object.keys(obj).map(key => obj[key])
