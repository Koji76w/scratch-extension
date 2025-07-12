(function(Scratch) {
  'use strict';
  class MyExtension {
    getInfo() {
      return {
        id: 'helloWorld',
        name: 'Hello World',
        blocks: [
          {
            opcode: 'sayHello',
            blockType: Scratch.BlockType.REPORTER,
            text: 'say hello',
          }
        ]
      };
    }

    sayHello() {
      return 'Hello from extension!';
    }
  }

  Scratch.extensions.register(new MyExtension());
})(Scratch);
