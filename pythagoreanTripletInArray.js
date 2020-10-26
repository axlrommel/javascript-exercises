const processData = (input) => {
  const data = JSON.parse(input);
  data.map((i, indexI) => {
    return data.map((j, indexJ) => {
      if (indexI <= indexJ) return;
      const found = data.find(k => k * k === i * i + j * j);
      if (found)
        console.log('found [', i, j, found, ']');
      return;
    })
  })
  console.log('expected: [4, 3, 5]');
  console.log('expected: [12, 5, 13]');
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "[3, 5, 6, 10, 4, 13, 12]";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});