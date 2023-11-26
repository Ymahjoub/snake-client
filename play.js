#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())
const { connection } = require("./client");

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};




console.log("connecting...");
const remoteConnection = connection();
setupInput();


// Begin game
game.start()
