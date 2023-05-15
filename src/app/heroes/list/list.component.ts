import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    public heroNames: string[] = ['Spiderman', 'IronMan', 'Hulk', 'She Hulk', 'Thor', 'Groot', 'Rocket Racoon'];
    public deletedHero? : string;
    removeLastHero():void{
      this.deletedHero = this.heroNames.pop();
    }

  }
