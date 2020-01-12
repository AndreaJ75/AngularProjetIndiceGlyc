import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlimentListService } from '../aliment-list.service';
import { Calcultor } from '../calcultor';
import { Aliment } from '../aliment';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  alimentsAll : Aliment[] = this.alimentListService.alimentList;

  alimentToCalculate : Aliment ;
  alimentCalculated : Calcultor;
  glycemicCharge : number = 0;
  alimentCalculList : Calcultor[] = [];
  totalGlycCharge = 0;
  showArray = false;


  calculatorForm : FormGroup;
  formCalculator : Calcultor;


  constructor(private formBuilder: FormBuilder,
    private alimentListService : AlimentListService) {
      this.calculatorForm = this.formBuilder.group({
        aliment: null,
        portion : 0
      });
     }

  ngOnInit() {
    this.alimentCalculList = [];
    this.totalGlycCharge = 0;
  }

  onSubmit(formCalculator) {

    console.log(formCalculator);
    console.log(formCalculator.portion);

    // Lecture list des aliments de alimentCartService + sélection de l'aliment considéré en prenant l'index de celui-ci dans la liste
    this.alimentToCalculate = formCalculator.aliment;

    //this.alimentToCalculate = this.alimentListService.getAlimentToCalculate(aliment);

    // Calcul de charge glycémique de l'aliment sélectionné

    this.glycemicCharge = (formCalculator.aliment.ig) * (formCalculator.aliment.carbs * formCalculator.portion)/10000;
    // Alim de List des aliment à displayer sur Calculator.html

    this.alimentCalculated  = {
      name : this.alimentToCalculate.name,
      ig : this.alimentToCalculate.ig,
      carbs : formCalculator.aliment.carbs * formCalculator.portion/100,
      glycCharge : this.glycemicCharge
    }

    console.log(this.alimentCalculated);

    this.alimentCalculList.push(this.alimentCalculated);
    console.log("alimentlist " + this.alimentCalculated);

    
    this.totalGlycCharge = this.totalGlycCharge + this.glycemicCharge;
    console.log("charge GYLC TOTAL : " + this.totalGlycCharge);
    
    if (this.alimentCalculList !== []) {
      this.showArray = true;
    } 
  }

  deleteAlimentCalcul(aliment:Calcultor) {
    const index: number = this.alimentCalculList.indexOf(aliment);
  
    this.totalGlycCharge = this.totalGlycCharge - aliment.glycCharge ;
    console.log("charge GYLC TOTAL : " + this.totalGlycCharge);

    if (index !== -1) {
        this.alimentCalculList.splice(index, 1);
    }        
  }





}
