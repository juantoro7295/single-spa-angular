import { Component, OnInit } from '@angular/core';
import { CharacterService } from './service/character.service';

@Component({
  selector: 'mf-footer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Rick and Morty App';
  public characters : any[] = [];
  public info : any = null;
  public q : string = "";
  public pages : any[] = [];
  public currentPage : number = 1;

  constructor(private $character: CharacterService) { }
  ngOnInit(): void {
    this.getCharacters();
  }
  
 

  getCharacters() {
    this.$character.getcharacters().subscribe(
      (data: any) => {
        this.characters = data.results;
        this.info = data.info;
    });
  }


  

}
