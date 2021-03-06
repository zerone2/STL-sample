// Python list 참고.
const List = function() {
  this.data = [];
  this.pos = 0;
  this.listSize = 0;
  document.writeln(`<br>★★★ List example ★★★ <br>=================================<br>`);
};

// append value at the end of the list
List.prototype.append = function (value) {
  this.data[this.listSize] = value;
  this.listSize++;
};

// find value in the list and return index
List.prototype.find = function (value) {
  for(let i = 0; i < this.listSize; i++){
    if(this.data[i] === value)
      return i;
  }
  return -1;
};

// get value in the list with position
List.prototype.get = function(pos) {
  if(pos < this.listSize) return this.data[pos];
  return -1;
};

// insert value at the list[index]
List.prototype.insert = function (index, value) {
  if(this.data[index] !== undefined){
    this.listSize++;
    for(let i = this.listSize; i > index; i--)
      this.data[i] = this.data[i-1];
    this.data[index] = value;
  } else { // data[index] === undefined ---> 데이터가 없는 경우.
    this.listSize++;
    this.data[index] = value;
  }
};

// remove value from the list
List.prototype.remove = function(value) {
  let removePos = this.find(value);
  if(removePos > -1) {
    this.data.splice(removePos, 1);
    this.listSize--;
    return true;
  }
  return false;
};

// return length of list
List.prototype.length = function() {
  return this.listSize;
};

// return datas in the list
List.prototype.toString = function() {
  return this.data;
};

// find value from the list and return true if it exists
List.prototype.contains = function(value) {
  if (this.find(value) > -1) return true;
  return false;
};

// clear the list
List.prototype.clear = function() {
  this.data = [];
  this.listSize = 0;
  this.pos = 0;
};

// make position to front
List.prototype.front = function() {
  this.pos = 0;
};

// make position to end
List.prototype.end = function() {
  this.pos = this.listSize - 1;
};

// make position to next of list
List.prototype.next = function() {
  if(this.pos < this.listSize-1)
    this.pos++;
};

// make position to prev of list
List.prototype.prev = function() {
  if(this.pos > 0)
    this.pos--;
};

// return current position
List.prototype.currPos = function() {
  return this.pos;
};

// set position
List.prototype.moveTo = function(position) {
  if(position < this.listSize) 
    this.pos = position;
};

// get element from position
List.prototype.getElement = function() {
  return this.data[this.pos];
};

export default List;