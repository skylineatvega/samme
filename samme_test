(function (Scratch) {
  "use strict";

  class Test {
    getInfo() {
      return {
        id: "samme_test_safe",
        name: "SAMME Test",
        blocks: [
          {
            opcode: "hello",
            blockType: Scratch.BlockType.COMMAND,
            text: "hello samme"
          }
        ]
      };
    }

    hello() {
      console.log("SAMME OK");
    }
  }

  Scratch.extensions.register(new Test());
})(Scratch);
