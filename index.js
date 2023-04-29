function myEach(collection, callback) {
  let newCollection = collection;

  if (!Array.isArray(newCollection)) {
    newCollection = Object.values(newCollection);
  }
  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }

  return collection;
}

function myMap(collection, callback) {
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }
  const newArr = [];
  for (let i = 0; i < collection.length; i++) {
    newArr.push(callback(collection[i]));
  }

  return newArr;
}

function myReduce(collection, callback, acc) {
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }
  let i = 0;
  if (acc === undefined) {
    acc = collection[0];
    i = 1;
  }

  for (; i < collection.length; i++) {
    acc = callback(acc, collection[i], collection);
  }

  return acc;
}

function myFind(collection, predicate) {
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
}

function myFilter(collection, predicate) {
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }
  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
function mySize(collection) {
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }
  return collection.length;
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }

  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(array[i]);
  }
  return arr;
}
function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }

  const arr = [];
  for (let i = array.length - n; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

function myKeys(object) {
  const arr = [];
  for (let key in object) {
    arr.push(key);
  }
  return arr;
}

function myValues(object) {
  const arr = [];
  for (let key in object) {
    arr.push(object[key]);
  }
  return arr;
}
