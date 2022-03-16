import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cw';
  games = JSON.parse(localStorage.getItem("games"))|| [];

  deleteGame(id){
    for( var i = 0; i < this.games.length; i++){ 
    
      if ( this.games[i].id == id) { 
        console.log(this.games[id])
          this.games.splice(i, 1); 
      }
    }
    localStorage.setItem("games", JSON.stringify(this.games));
    // localStorage.setItem("games", )
  }
}
