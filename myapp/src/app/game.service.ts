import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  
  public game :any[]=[];
  boardSize: number = 9;
  activePlayer: string = "X";
  turnCount: number = 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;

  constructor() {
     this.newGame()
  }
   
  newGame(){
    this.activePlayer = "X";
    this.turnCount = 0;
    this.isGameRunning = false;
    this.isGameOver =  false;
    this.winner = false;
    this.game = this.createGame();
  } 

  createGame(){
    let game = [];
    for( let i = 0; i < 9; i ++ ){
      game.push( { id: i, state: null } )
    };
    return game
  } 

   get getGame (){
     return this.game
   }

   set setGame( game:any  ){
     this.game = [...game]
    
   }
   
  changePlayerTurn( squareClicked:any){  
    this.updateGame( squareClicked )
    if(!this.isGameOver) this.activePlayer = this.activePlayer === "X" ? "O" : "X"
    this.turnCount ++;
    this.isGameOver = this.isGameOver ? true : false;
   }

  updateGame( squareClicked:any){
    this.game[ squareClicked.id ].state = squareClicked.state
    if (this.isWinner) {
       this.winner = true;
       this.isGameRunning = false;
       this.isGameOver = true;
    }
  }

  get gameOver(): boolean{
    return this.turnCount > 8 || this.winner ? true : false
  }

  get isWinner(): boolean{
    return this.checkDiag() || this.checkRows(this.game, "row") || this.checkRows(this.game, "col") ? true : false;
  }

   checkRows( game:any, mode:any ): boolean{
    
    const
      ROW = mode === "row" ? true : false,
      DIST = ROW ? 1 : 3,
      INC = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

      for ( let i = 0; i < NUMTIMES; i += INC ){

        let 
          firstSquare = game[i].state,
          secondSquare =  game[i + DIST].state,
          thirdSquare = game[ i + ( DIST * 2)].state;

        if ( firstSquare && secondSquare && thirdSquare  ){
           if ( firstSquare === secondSquare && secondSquare === thirdSquare ) return true    
        }
      }
      return false
   }

   checkDiag (){
    const timesRun = 2,
      midSquare = this.game[4].state;

    for( let i = 0; i <= timesRun; i+=2 ){

     let 
      upperCorner = this.game[i].state,
      lowerCorner =  this.game[8 - i].state;
    
      if ( midSquare && upperCorner && lowerCorner  ){
          if( midSquare === upperCorner && upperCorner === lowerCorner) return true
      }
    }

     return false
   }

}