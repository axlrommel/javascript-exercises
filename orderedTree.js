const processData = (input) => {
  class LocalNode {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
    };
  };

  class BST {
    constructor() {
      this.root = null;
    };
    create(val) {
      const newNode = new LocalNode(val);
      if (!this.root) {
        console.log('I am the root', val);
        this.root = newNode;
        return this;
      };
      let current = this.root;

      const addSide = side => {
        if (!current[side]) {
          console.log(val, ' is now on the ', side, 'of ', current.val)
          current[side] = newNode;
          return this;
        };
        current = current[side];
      };

      while (true) {
        if (val === current.val) return this;
        if (val < current.val) addSide('left');
        else addSide('right');
      };
    };
  };

  const tree = new BST();
  const data = JSON.parse(input);
  data.map(i => tree.create(i));
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

//              20
//        14               57
//   9        19        31    62
// 3   11                        72