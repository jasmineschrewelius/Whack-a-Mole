import { Injectable } from '@angular/core';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  state: State = { timer: 60 }            // attribute containing state

  maximumMoles: number= 0;

  maximumTime: number= 0;

  scorePoints: number= 0;
  
  interval: any = null;

  constructor() { }

  startTimer() {
  
    if (this.state.timer <= 0 , this.interval != null) return; // dont start if timer is 0 or if it already is running
      this.interval = setInterval(() => {    // start interval
        this.state.timer--;                  // timer - 1 
        this.randomBox()
        if(this.state.timer <= 0) {          // if timer is 0, stop
          clearInterval(this.interval);      // stops interval
          this.interval = null;              // clear interval
      }
    }, 1000);
}
molegrid : boolean [] = [     // Array with booleans moles set to false
  false,false,false,false,false,
  false,false,false,false,false,
  false,false,false,false,false,
  false,false,false,false,false,
  false,false,false,false,false,
]
/*
timergrid : NodeJS.Timer [] = [     // Array with timers
  ,,,,,
  ,,,,,
  ,,,,,
  ,,,,,
  ,,,,,
]
*/
randomBox() {
  if ( this.maximumMoles < 3 ) {      // keep going til the number of moles is 3
    const idx = Math.floor(Math.random() * 25);  // randomize number between 0 - 25
  this.molegrid[idx] = !this.molegrid[idx]   // is it true = false, is it false = true
  this.maximumMoles++;                       // counts moles
  setInterval(() => this.popDown(idx), 4000)    // interval that calls popDown and sets for 4 sek
  }
}

pointClick() {

}

popDown(idx:number) {
   if (this.maximumTime = 4000) {   // if maximumTime = 4 sek, do the next thing
    this.molegrid[idx] = !this.molegrid[idx] // true = false, false = true. It hides the mole if it is shown
   }
}

}

  