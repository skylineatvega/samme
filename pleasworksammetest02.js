(function (Scratch) {
  "use strict";

  class SAMMETest {
    getInfo() {
      return {
        id: "samme_test_ok",
        name: "SAMME Test OK",
        blocks: [
          {
            opcode: "ping",
            blockType: Scratch.BlockType.COMMAND,
            text: "SAMME ping"
          }
        ]
      };
    }

    ping() {
      console.log("SAMME loaded successfully");
    }
  }

  Scratch.extensions.register(new SAMMETest());
})(Scratch);
