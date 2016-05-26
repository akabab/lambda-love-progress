const each = (fn, col) => col ? arrayEach(fn, col) : (col) => arrayEach(fn, col)

const arrayEach = (fn, col) => {
	var arr = arrayFrom(col)
  
  const max = arr.length
  var i = -1
  
  while (++i < max)
    if (fn(arr[i], i, col) === false)
      break
  
  return col
}

// HELPERS

const arrayFrom = (src) => {
  if (typeof src !== "object") { return }
  
  switch (typeOf(src)) {
    case "Array":
      return src
    case "Object":
      return valuesArrayFromObject(src)
    case "Set":   
      return Array.from(src)
    case "Map":
      return valuesArrayFromMap(src)
    default:
      return []
  }
}

const typeOf = (elem) => Object.prototype.toString.call(elem).slice(8, -1)


const valuesArrayFromObject = (o) => {
 	if (typeOf(o) !== "Object") { return }
  
  return Object.keys(o).map(key => o[key])
}

const valuesArrayFromMap = (map) => {
 	if (typeOf(map) !== "Map") { return } 

 	var values = []
  var iter = map.values()
  
  while (1) {
    var n = iter.next()
    if (n.done) { return values }
    values.push(n.value)
  } 
}
