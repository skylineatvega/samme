(function (Scratch) {
  "use strict";

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  class SAMME {
    getInfo() {
      return {
        id: "skylineSAMME",
        name: "Skyline Advanced MultiMedia Extension",
        color1: "#1E90FF",
        color2: "#1C86EE",
        blocks: [
          {
            opcode: "playSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "play project sound [SOUND]",
            arguments: {
              SOUND: { type: Scratch.ArgumentType.SOUND }
            }
          },
          {
            opcode: "getBPM",
            blockType: Scratch.BlockType.REPORTER,
            text: "BPM of playing sound [SOUND]",
            arguments: {
              SOUND: { type: Scratch.ArgumentType.SOUND }
            }
          },

          "---",

          {
            opcode: "clearCanvas",
            blockType: Scratch.BlockType.COMMAND,
            text: "clear image canvas"
          },
          {
            opcode: "drawImage",
            blockType: Scratch.BlockType.COMMAND,
            text: "draw image [URL] at x:[X] y:[Y]",
            arguments: {
              URL: { type: Scratch.ArgumentType.STRING },
              X: { type: Scratch.ArgumentType.NUMBER },
              Y: { type: Scratch.ArgumentType.NUMBER }
            }
          }
        ]
      };
    }

    playSound(args, util) {
      const index = util.target.sprite.sounds.findIndex(
        s => s.name === args.SOUND
      );
      if (index < 0) return;
      const soundId = util.target.sprite.sounds[index].soundId;
      util.target.sprite.soundBank.playSound(util.target, soundId);
    }

    getBPM(args, util) {
      // TODO: FFT 기반 BPM 분석
      return 120; // 임시값
    }

    clearCanvas() {
      // TODO: canvas 초기화
    }

    drawImage(args) {
      // TODO: canvas drawImage
    }
  }

  Scratch.extensions.register(new SAMME());
})(Scratch);
