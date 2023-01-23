import { Component } from '@angular/core';
import { Moles } from '../mole';


@Component({
  selector: 'app-mole',
  templateUrl: './mole.component.html',
  styleUrls: ['./mole.component.css']
})
export class MoleComponent {
 
 
 thisMole: Moles = { show: true };
 
 
}

