import { Component, OnInit } from '@angular/core';
import { AlimentCartServiceService } from '../aliment-cart-service.service';
import { FormBuilder } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-alimentcart',
  templateUrl: './alimentcart.component.html',
  styleUrls: ['./alimentcart.component.css']
})
export class AlimentcartComponent implements OnInit {

  alimentToAdd;
  checkoutForm;

  constructor(private formBuilder: FormBuilder,
    private alimentCartService : AlimentCartServiceService) {

      this.alimentToAdd = this.alimentCartService.getAlimentToAdd();
      this.checkoutForm = this.formBuilder.group({
      name: '',
      ig: '',
      carbs:''
    });
   }

  ngOnInit() {
  }
  
  addToCart(alimentToAdd) {
      window.alert('Your aliment has been added to the cart!');
      this.alimentCartService.addToAlimentCart(alimentToAdd);
   }


  onSubmit(alimentToAdd) {
    // Process checkout data here
    this.alimentCartService.addToAlimentCart(alimentToAdd);
    console.warn('Your aliment has been submitted', alimentToAdd);

    // On nettoie le formulaire une fois la saisie prise en compte
    this.checkoutForm.reset();
    console.warn('After reset ', alimentToAdd);
  }


}
