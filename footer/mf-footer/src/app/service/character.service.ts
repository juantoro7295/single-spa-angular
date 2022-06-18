import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url: string = 'https://rickandmortyapi.com/api/';

  

  constructor(private http: HttpClient) { }

  getcharacters():Observable<any> {
    return this.http.get(this.url + 'character');
  }




}

