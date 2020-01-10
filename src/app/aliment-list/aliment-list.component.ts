import { Component, OnInit } from '@angular/core';
import { AlimentListService } from '../aliment-list.service';
import { AlimentCartServiceService} from '../aliment-cart-service.service';
import { Aliment } from '../aliment';


@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {

  alimentAll : Aliment[] = this.alimentListService.alimentList ;
  
  constructor(private alimentListService : AlimentListService,
    private alimentCardService : AlimentCartServiceService) { 

    }

  ngOnInit() {
  }

  deleteAliment(aliment:Aliment) {
    const index: number = this.alimentAll.indexOf(aliment);
    if (index !== -1) {
        this.alimentAll.splice(index, 1);
    }        
  }

}
