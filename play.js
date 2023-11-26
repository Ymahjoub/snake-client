#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())
const { connection } = require("./client");
const { setupInput } = require("./input");





console.log("connecting...");
const remoteConnection = connection();
setupInput();


// Begin game
game.start()
