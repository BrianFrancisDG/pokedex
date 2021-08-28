import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Pokemon } from 'src/app/models/pokemon';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-pkmn-card',
  templateUrl: './pkmn-card.component.html',
  styleUrls: ['./pkmn-card.component.scss'],
})
export class PkmnCardComponent implements OnInit {
  @Input('pokemon') pokemonInfo: Pokemon;
  normalSpriteUrl;
  captured: boolean = false;
  firstType: string;

  constructor(
    private httpService: HttpService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.normalSpriteUrl = this.sanitizer.bypassSecurityTrustUrl(
      this.pokemonInfo.normalSprite
    );

    this.firstType = this.pokemonInfo.types[0];
  }

  capturedPokemon() {
    this.captured = !this.captured;
  }
}
