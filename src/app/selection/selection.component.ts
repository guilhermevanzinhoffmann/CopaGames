import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) { }

  totalSelected = 0;
  title = 'fase de seleção';
  games : Array<Game> = new Array<Game>();

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void{
    this.gameService.getGames()
      .subscribe(games => this.games = games);
  }

  updateCheckedState(): void{
    this.totalSelected = 0;
    this.games.forEach(game => {
      if(game.selected){
        this.totalSelected += 1;
      }
    });
  }

  goToResult(): void{
    let winnerGames = new Array<Game>();
    winnerGames.push(this.games[0]);
    winnerGames.push(this.games[1]);
    this.router.navigateByUrl('/result', {state: {games: winnerGames}});
  }
}
