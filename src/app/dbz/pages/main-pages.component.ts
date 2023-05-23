import { Component } from "@angular/core";
import { Character } from '../interfaces/character.interface';

@Component({
  selector:'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 7000
  },
  {
    name: 'Freezer',
    power: 10500
  },
  {
    name: 'Majin boo',
    power: 500000
  },
  {
    name: 'Yamcha',
    power: 10
  },
  {
    name: 'Mr popo',
    power: 1000000
  }
];

  onNewCharacter( character:Character):void{
    this.characters.push(character);
  }

  onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }
}
