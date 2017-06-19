#!/usr/bin/env node

'use strict';
const program = require('commander');

var board = () => {
  this.board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  this.playerOneTurn = true;
}

board.prototype.markPosition = (x, y) => {
  if (this.playerOneTurn) {
    this.board[x][y] =  1;
    this.playerOneTurn = false;
  } else {
    this.board[x][y] = 2;
    this.playerOneTurn = true;
  }
}

board.prototype.returnBoard = () => {
  console.log('**BOARD**', '\n',
  JSON.stringify(this.board[0]), '\n',
  JSON.stringify(this.board[1]), '\n',
  JSON.stringify(this.board[2]), '\n',
  '*******');
}

program
  .version('0.0.1')
  .command('markPosition [board]')
  .description('mark a position on the board')
  .action(board.prototype.markPosition);
program.parse(process.argv);
