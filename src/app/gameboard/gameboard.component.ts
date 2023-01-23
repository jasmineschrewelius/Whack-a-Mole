import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent {
  
  /*

  randomBox() {
    let lastBox;
    const boxes = document.querySelectorAll('.box')
    const idx = Math.floor(Math.random() * boxes.length);
    const box = boxes[idx];
    if ( box === lastBox) {
      return this.randomBox();
    }
    lastBox = box;
    return box;
  }
 

  popUp() {
    const box = randomBox(); 

  }
  */ 
}

