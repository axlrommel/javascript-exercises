const processData = (input) => {
  const merge = (left, right) => {
    let arr = [];

    while (left.length && right.length) {
      console.log(left, right);
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    console.log('----');
    return arr.concat(left.slice().concat(right.slice()));
  }

  const mergeSort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  const data = JSON.parse(input);
  const sortedArray = mergeSort(data);
  console.log(sortedArray);

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "[20, 14, 57, 9, 19, 31, 62, 3, 11, 72]";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});