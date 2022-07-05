import * as PIXI from "pixi.js";
import Monster from "./entities/monster";
import Player from "./entities/player";

// Setup PixiJS Application
const canvasElement = document.getElementById("container")

const app = new PIXI.Application({
  backgroundColor: 0x10bb99,
  width: 800,
  height: 600,
  autoStart: false
});
canvasElement.appendChild(app.view);

app.stage.sortableChildren= true;
app.stage.interactive = true;
app.ticker.maxFPS = 60;
app.ticker.add(gameLoop);

var state = {
  player: { active: false, position: { x: 0, y: 0 } },
  monster: {
    caught: false
  },
  level: 1
}

var monsters = [];
var player;

setup();


function gameLoop() {
  monsters.forEach((m) => {
    m.update(state);
  });
  player.update(state);
}



function reset() {
  console.log("Reseting the game..")

  state = {
    player: { ...state.player, alive: true, active: false },
    monster: {
      catch: false
    },
    level: 1
  }
  

  monsters.forEach(m => {
    m.destroy();
  });
  monsters = [];
  addMonster();

}

function setup() {
  console.log("Starting the game..")
  reset();
  addPlayer();

  app.ticker.start();
}


function addPlayer() {
  console.log("Adding player.")
  player = new Player(0x00FF99, Math.random() * 10 + 10, { x: 2 + Math.random(), y: 2 + Math.random() });
  player.zIndex = 2;
  player.x = state.player.position.x;
  player.y = state.player.position.y;

  app.stage.addChild(player);
  
  app.stage.on('mousemove', function (e) {
    state.player.active = true;

    state.player.position.x = e.data.global.x;
    state.player.position.y = e.data.global.y;
  });
}

function addMonster() {
  let monster = new Monster(0x79a3b1, Math.random() * 10 + 10, { x: 2 + Math.random(), y: 2 + Math.random() });
  monster.zIndex=1;
  app.stage.addChild(monster);
  monsters.push(monster);
}


export const gameCommands = {
  reset: reset
}