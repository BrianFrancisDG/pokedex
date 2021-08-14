import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class PokedexBuilderService {
  // TODO: Clean up these variables
  pokemonFlavorText = '';
  pokemonHeight = '';
  pokemonWeight = '';
  pokemonNormalSpriteUrl = '';
  pokemonTypes = [];

  constructor(private httpService: HttpService) {}

  getPokedex(pokemonEntries: any[]) {
    let pokedex = [];
    // get pokemon_entries
    // loop through each
    pokemonEntries.forEach(async (pkmn) => {
      //// get name (pokemon_entries['pokemon_species']['name']), number (pokemon_entries['entry_number']) from pokemon_entries
      let pokemonName = pkmn['pokemon_species']['name'];
      let pokemonNumber = pkmn['entry_number'];
      let speciesUrl = pkmn['pokemon_species']['url'];

      //// make GET call for pokemon_entries['url']
      await this.getCurrentPokemonFlavorText(speciesUrl);

      //// make GET call to api for /{name}

      await this.getCurrentPokemonTypesSpritesHeightWeight(pokemonName);

      //// build pokemon object
      let pokemon: Pokemon = {
        name: pokemonName,
        number: pokemonNumber,
        flavorText: this.pokemonFlavorText,
        types: this.pokemonTypes,
        normalSprite: this.pokemonNormalSpriteUrl,
        shinySprite: null,
        height: this.pokemonHeight,
        weight: this.pokemonWeight,
      };
      pokedex.push(pokemon);
    });

    //return pokedex[]

    // sorting pokedex ascending by number
    return pokedex;
  }

  getCurrentPokemonFlavorText(speciesUrl) {
    return new Promise<void>((resolve) => {
      this.httpService.get(speciesUrl).subscribe((result) => {
        let flavorTextArray = result['flavor_text_entries'];

        //// result['flavor_text_entries'], loop through where language['name'] == 'en' and version['name'] == 'blue', flavor_text
        let blueEnglishFT = flavorTextArray.find(
          (flavorText) =>
            flavorText['language']['name'] == 'en' &&
            flavorText['version']['name'] == 'blue'
        );

        this.pokemonFlavorText = blueEnglishFT['flavor_text'];
        resolve();
      });
    });
  }

  getCurrentPokemonTypesSpritesHeightWeight(pokemonName) {
    return new Promise<void>((resolve) => {
      this.httpService
        .get('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
        .subscribe((result) => {
          this.pokemonHeight = result['height'];
          this.pokemonWeight = result['weight'];
          this.pokemonNormalSpriteUrl = result['sprites']['front_default'];

          let resultTypeArray = result['types'];
          let types = [];

          // loop through and get name, return array
          resultTypeArray.forEach((element) => {
            types.push(element['type']['name']);
          });

          this.pokemonTypes = types;

          resolve();
        });
    });
  }
}
