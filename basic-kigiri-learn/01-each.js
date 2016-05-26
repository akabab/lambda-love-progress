// CODE HERE
// to help you, here the function signature I want :

// fn is the give function
// collection is the array for the first test
const each = (fn, collection) => {
  return collection ? _each(fn, collection) : (collection) => _each.apply(this, [fn, collection]);
}

const _each = (fn, collection) => {
  for (var i=0; i<collection.length; i++) {
    if (fn(collection[i], i, collection) === false)
      break;
  }
  return collection; 
}
