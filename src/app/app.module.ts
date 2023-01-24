import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GameService } from './game.service';



@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    GameboardComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
