class ConsoleExtension {
  getInfo() {
    return {
      id: 'oeildlconsole',
      name: 'Console',
        color1: '#e60f0f', //couleur des blocs
        color2: '#a20404', //bordure de l'icone dans la catégorie
        color3: '#a20404', //contour des blocs

      blocks: [
        {
          opcode: 'error',
          blockType: Scratch.BlockType.COMMAND,
          text: 'error [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ㅤ'
            }
          }
        },

        {
          opcode: 'warning',
          blockType: Scratch.BlockType.COMMAND,
          text: 'warning [TWO]',
          arguments: {
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ㅤ'
            }
          }
        },

        {
          opcode: 'info',
          blockType: Scratch.BlockType.COMMAND,
          text: 'info [THREE]',
          arguments: {
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ㅤ'
            }
          }
        },
        
        {
          opcode: 'log',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log [FOUR]',
          arguments: {
            FOUR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ㅤ'
            }
          }
        },

        {
          opcode: 'clear',
          blockType: Scratch.BlockType.COMMAND,
          text: 'clear console'
        },
        '---',
        {
          opcode: 'color',
          blockType: Scratch.BlockType.COMMAND,
          text: 'display [NINE] with color [TEN] bg-color [ELEVEN] and size [SIZE]',
          arguments: {
            NINE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'text'
            },
            TEN: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ffd000'
            },
            ELEVEN: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#e60f0f'
            },
            SIZE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '11'
            }
          }
        },

        {
          opcode: 'css',
          blockType: Scratch.BlockType.COMMAND,
          text: 'display [TEXT] with style [CSS]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'text'
            },
            CSS: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'font-family: cursive;'
            }
          }
        },
/*
        {
          opcode: 'image',
          blockType: Scratch.BlockType.COMMAND,
          text: 'display image from [URL] with height [HEIGHT] px and width [WIDTH] px',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'text'
            },
            HEIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '20'
            },

            WIDTH: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '20'
            }
          }
        },*/
        '---',
        {
          opcode: 'group',
          blockType: Scratch.BlockType.COMMAND,
          text: 'group with title [FIVE]',
          arguments: {
            FIVE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'group'
            }
          }
        },

        {
          opcode: 'ungroup',
          blockType: Scratch.BlockType.COMMAND,
          text: 'quit group'
        },
        '---',
        {
          opcode: 'timer',
          blockType: Scratch.BlockType.COMMAND,
          text: 'start timer named [SIX]',
          arguments: {
            SIX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'timer'
            }
          }
        },
        
        {
          opcode: 'timerlog',
          blockType: Scratch.BlockType.COMMAND,
          text: 'display timer named [SEVEN]',
          arguments: {
            SEVEN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'timer'
            }
          }
        },

        {
          opcode: 'timerstop',
          blockType: Scratch.BlockType.COMMAND,
          text: 'stop timer named [EIGHT]',
          arguments: {
            EIGHT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'timer'
            }
          }
        },
        
      ]
    };
  }


  error(args) {
    console.error(args.ONE);
  }

  warning(args) {
    console.warn(args.TWO);
  }

  info(args) {
    console.info(args.THREE);
  }

  log(args) {
    console.log(args.FOUR);
  }

  clear() {
    console.clear();
  }

  group(args) {
    console.group(args.FIVE);
  }

  ungroup() {
    console.groupEnd();
  }

  timer(args) {
    console.time(args.SIX);
  }

  timerlog(args) {
    console.timeLog(args.SEVEN);
  }

  timerstop(args) {
    console.timeEnd(args.EIGHT);
  }

  color(args) {
    var styles = [
      'color: ' + args.TEN,
      'background-color: ' + args.ELEVEN,
      'font-size: ' + args.SIZE + "px",
    ].join(';');
    console.log('%c%s', styles, args.NINE);
  }

  css(args) {
    var styles = [
      args.CSS,
    ].join(';');
    console.log('%c%s', styles, args.TEXT);
  }
/*
  image(args) {
    var styles = [
      'font-size: 1px',
      'padding:' + '50' + 'px ' + '50' + 'px',
      'background-size: ' + args.WIDTH + 'px ' + args.HEIGHT + 'px',
      'background: no-repeat url("' + args.URL + '")',
    ].join(';');
    console.log('%c%s', styles);
  }
  */
};
Scratch.extensions.register(new ConsoleExtension());
