import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getDitto() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }

  getKantoDex() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokedex/2');
  }

  get(url) {
    return this.httpClient.get(url);
  }
}
