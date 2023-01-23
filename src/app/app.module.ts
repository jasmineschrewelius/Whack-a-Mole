import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GameService } from './game.service';
import { MoleComponent } from './mole/mole.component';



@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    GameboardComponent,
    MoleComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
