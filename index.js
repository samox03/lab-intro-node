class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.length += 1
    this.items.push(item)
    this.items.sort(function(a, b) {
      return a - b;
    })
  }

  get(pos) {
    if (!this.items[pos]) //if(pos >= this.items.length)
    {throw new Error('OutOfBounds');}
    else{
      return this.items[pos]
    }
  }

  max() {
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(...this.items)
    }
  }

  sum() {
    if(this.items.length==0){
      return 0
    }
    else{
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.items.reduce(reducer)    
    }
  }

  avg() {
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    else
    {return this.sum()/this.items.length}
  }
}

module.exports = SortedList;
