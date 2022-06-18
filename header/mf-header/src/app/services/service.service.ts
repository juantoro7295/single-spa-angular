import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  //obtener pokemones 
  getPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=15');
  }

  //informacion porkemones

  getinfo(url: string) {
    return this.http.get(url);
  }
}
