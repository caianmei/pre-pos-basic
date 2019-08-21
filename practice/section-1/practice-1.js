'use strict';

function find(collection, element) {
  for (let index = 0; index < collection.length; index++) {
    if (collection[index]  === element) {
        return collection[index];
    }
    
  }
  return '实现练习要求，并改写该行代码。';
}
