import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'bc-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }

  title = 'app-pokeapi';
  pokemones = null;
  pokemon: any = {}

  constructor(private $pokemon: ServiceService)  { 
    this.$pokemon.getPokemon().subscribe((res: any) => {
      this.pokemones = res.results;
    });
    
  }

  getInfo(url: string) {
    this.$pokemon.getinfo(url).subscribe((res: any) => {
      this.pokemon = res;
    })
  }
}