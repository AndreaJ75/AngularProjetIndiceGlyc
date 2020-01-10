import { Injectable } from '@angular/core';
import { Aliment } from './aliment';
import { AlimentListService } from './aliment-list.service';

@Injectable({
  providedIn: 'root'
})
export class AlimentCartServiceService {

  alimentToAdd : Aliment ;

  constructor(private alimentListService : AlimentListService) { }

  addToAlimentCart(alimentToAdd) {
    this.alimentListService.alimentList.push(alimentToAdd);
  }

  getAlimentToAdd() {
    return this.alimentToAdd;
  }

}
