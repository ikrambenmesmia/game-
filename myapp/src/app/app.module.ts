import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { GameService } from './game.service';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GameComponent,
    SquareComponent
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
