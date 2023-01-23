import { Injectable } from '@angular/core';
import { State } from './state';
import { Moles } from './mole';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  state: State = { timer: 60 }            // attribute containing state
  
  interval: any = null;

  constructor() { }

  startTimer() {
  
    if (this.state.timer <= 0 , this.interval != null) return; // dont start if timer is 0 or if it already is running
      this.interval = setInterval(() => {    // start interval
        this.state.timer--;                  // timer - 1 
        if(this.state.timer <= 0) {          // if timer is 0, stop
          clearInterval(this.interval);      // stops interval
          this.interval = null;              // clear interval
      }
    }, 1000);
}
}

const MolesArray = ["mole1", "mole2", "mole3",
  "mole4", "mole5", "mole6","mole7", "mole8",
  "mole9", "mole10", "mole11", "mole12",
  "mole13", "mole14", "mole15", "mole16",
  "mole17", "mole18", "mole19", "mole20",
  "mole21", "mole22", "mole23", "mole24", "mole25"];
  