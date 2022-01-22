import { Component, OnInit, Input } from '@angular/core';
import { GameService } from "../game.service";

@Component({
  selector: 'app-square',
  template: `
    <div 
      class="game-square" 
      (click)="changePlayer()" 
      [ngClass]="{noClick: gameService.winner} "
> 
    <svg
    >
  <rect width="150" height="150" 
  style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />
  <line x1="0" y1="0" style="stroke:rgb(255,0,0);stroke-width:2" />
  <text x="50" y="100" font-size="100"> {{ square.state}} </text>
  
  </svg>

      
    </div>
   `,
  styles: [`
    .game-square { 
      text-align: center;
      line-height: 0.1;
      cursor: pointer;
    }

    .noClick {
      pointer-events: none;
    }`
  ]
})
export class SquareComponent implements OnInit {

  @Input() square:any ; 

  constructor( public gameService: GameService) { }

  ngOnInit() {
  }

  changePlayer(){ 

    this.gameService.isGameRunning = true;

    if ( this.gameService.isGameRunning && this.square.state === null ){
      this.square.state =  this.gameService.activePlayer;
      this.gameService.changePlayerTurn( this.square);
    }
    
  }
 
}