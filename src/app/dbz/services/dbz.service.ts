import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

console.log('UID :' + uuid());

@Injectable({ providedIn: 'root' })

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  },
  {
    id: uuid(),
    name: 'Freezer',
    power: 10500
  },
  {
    id: uuid(),
    name: 'Majin boo',
    power: 500000
  },
  {
    id: uuid(),
    name: 'Yamcha',
    power: 10
  },
  {
    id: uuid(),
    name: 'Mr popo',
    power: 1000000
  }
];

  addCharacter( character:Character):void{

    const newCharacter: Character = {id:uuid(), ...character}



    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }*/
  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character=> character.id !== id);
  }
}
