// CODE HERE
// to help you, here the function signature I want :

// fn is the give function
// collection is the array for the first test
const each = (fn, collection) => {
  
  if (collection) {
   	for (var i=0; i<collection.length; i++) {
   		fn(collection[i], i, collection); 
  	}
  	return collection; 
  }
  else {
    return (collection) => {
      for (var i=0; i<collection.length; i++) {
        fn(collection[i], i, collection); 
      }
      return collection;
    };
  }
 
}
