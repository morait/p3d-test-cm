import React, { Component } from 'react';
import  "scripts/three.js";
import  "fonts/helvetiker_regular.typeface.js";
import  "scripts/support.js";
import  "scripts/PointerLockControls.js";
import  "scripts/physi.js";
import  "scripts/sceneSetup.js";
import  "scripts/gameControls.js";
import  "scripts/enemy.js";
import  "scripts/text.js";
import  "scripts/player.js";
import  "scripts/pointerLockSetup.js";

import  "scripts/_game.js";


import './Game.css';

class Game extends Component {


  render () {
      return (

        <div>


<div id="control-panel">
    <label>Lives:</label> <span id="numberOfLives">3</span>
</div>

<div id="webgl-container">
</div>


</div>

      );
  }
}

export default Game;
