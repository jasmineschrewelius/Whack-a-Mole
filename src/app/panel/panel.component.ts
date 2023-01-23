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

  constructor(private _state: GameService) {
   this.state = this._state.state;
  }
  startGame(){
    this._state.startTimer() // start startTimer metod
   

    setTimeout(() => timeUp = true, 60000)
  }
}

let timeUp = false;
