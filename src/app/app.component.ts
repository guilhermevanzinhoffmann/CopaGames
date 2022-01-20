import { Component, Input, OnInit} from '@angular/core';
import { Game } from './models/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  totalSelected = 0;
  title = 'fase de seleção';
  games : Array<Game> = new Array<Game>();

  ngOnInit(): void {
    this.games.push(new Game('Dota 2', 10, "PC"));
    this.games.push(new Game('CS:GO', 20, "PC"));
    this.games.push(new Game('League of Legends', 30, "PC"));
    this.games.push(new Game('Overwatch', 40, "PC"));
  }

  updateChackedState(){
    this.totalSelected = 0;
    this.games.forEach(game => {
      if(game.selected){
        this.totalSelected += 1;
      }
    });
  }
}
