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


  constructor(public _gameService: GameService) {   // contact with Game Service
   this.state = this._gameService.state;
  }

  startGame(){
    this._gameService.startTimer() // calls startTimer metod
  }
}