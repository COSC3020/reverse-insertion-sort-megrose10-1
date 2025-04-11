function insertionSortReverse(array) {
    //Start from second last array element
    for(var i = (array.length - 2); i >= 0; i--) {
      var val = array[i];
      var j;
      //console.log("val: " + val);
      //If the value after val is smaller, move that element to the left
      for(j = i; j < (array.length - 1) && array[j+1] < val; j++) {
        array[j] = array[j+1];
        //console.log("val2: " + array[j]);
      }
      array[j] = val;
      //console.log("val2: " + array[j]);
      //console.log(array);
    }
    return array;
}

//let array = [2, 1, 4, 3];
//console.log(insertionSortReverse(array));
