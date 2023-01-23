import { Component } from '@angular/core';
import { GameService} from '../game.service';
import { State } from '../state';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent {

  state: State = { timer: 0 };            // attribute containing state

  constructor(public _gameService: GameService) {
   this.state = this._gameService.state;
  }

  startGame(){
    this._gameService.startTimer() // start startTimer metod


    if ( this._gameService.state.timer > 1) {  // if the timer is more than 1, start randombox
      this._gameService.randomBox()  // start randomBox metod
    }
    setTimeout(() => timeUp = true, 60000)
  }
}

let timeUp = false;
