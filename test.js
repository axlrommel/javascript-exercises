const processData = (input) => {
  const arr = JSON.parse(input);
  arr.map(i => console.log(i));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "[1, 2, 3]";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});