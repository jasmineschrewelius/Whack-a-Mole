import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent {

  constructor(public __gameService:GameService) {}  // contact with Game Service

}

