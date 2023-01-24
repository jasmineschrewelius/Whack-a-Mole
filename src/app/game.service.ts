import { Injectable } from '@angular/core';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  state: State = { timer: 60 }            // attribute containing state

  maximumMoles: number= 0;

  scorePoints: number= 0;
  
  interval: any = null;

  constructor() { }

  startTimer() {
  
    if (this.state.timer <= 60 , this.interval != null) return; // dont start if timer is 0 or if it already is running
      this.interval = setInterval(() => {    // start interval
        this.state.timer--;                  // timer - 1 
        this.randomBox()                     // calls randomBox()
        if(this.state.timer <= 0) {          // if timer is 0, stop
          clearInterval(this.interval);      // stops interval
          this.interval = null;              // clear interval
          this.state.timer = 60;
      }
    }, 1000);
}
molegrid : boolean [] = [     // Array with 25 moles set to false to create the grid with 25 boxes one mole in each
  false,false,false,false,false,
  false,false,false,false,false,
  false,false,false,false,false,
  false,false,false,false,false,
  false,false,false,false,false,
]

randomBox() {
  if ( this.maximumMoles < 3 ) {      // keep going til the number of moles is 3 showing on board
    const idx = Math.floor(Math.random() * 25);  // randomize number between 0 - 25
    this.molegrid[idx] = !this.molegrid[idx]   // is it true = false, is it false = true
    this.maximumMoles++;                       // counts moles
    setTimeout(() => this.popDown(idx), 4000)    //  calls popDown and sets for 4 sek
  }
}

pointClick(idx:number) {
  this.scorePoints++;                         // count points
  this.molegrid[idx] = !this.molegrid[idx]    // is it true = false, is it false = true. It hides the mole if it is shown
  return this.scorePoints;                    // show the points to user
}

popDown(idx:number) {
    this.maximumMoles--;                        // counts down the mole
    this.molegrid[idx]= false; //  It hides the mole if it is shown
   }
}

  