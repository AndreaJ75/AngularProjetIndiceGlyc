import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlimentListService } from '../aliment-list.service';
import { Calcultor } from '../calcultor';
import { Aliment } from '../aliment';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorForm;
  alimentsAll : Aliment[] = this.alimentListService.alimentList;

  alimentToCalculate : Aliment ;
  alimentCalculated : Calcultor;
  glycemicCharge;
  alimentCalculList : Calcultor[];
  formCalculator : Calcultor[];
  formBuildData : FormBuilder;

  constructor(private formBuilder: FormBuilder,
    private alimentListService : AlimentListService) {
      this.calculatorForm = this.formBuilder.group({
        name: '',
        portion : ''
      });
     }

  ngOnInit() {
    
  }

  
  onSubmit(formCalculator[IdAliment]) {

    // Lecture list des aliments de alimentCartService + sélection de l'aliment considéré en prenant l'index de celui-ci dans la liste
    this.alimentToCalculate = formCalculator.name[IdAliment];
    console.log("FormCalculator " + formCalculator.name);
    console.log("FormCalculator " + formCalculator.portion);
    //this.alimentToCalculate = this.alimentListService.getAlimentToCalculate(aliment);

    // Calcul de charge glycémique de l'aliment sélectionné

    this.glycemicCharge = (formCalculator.portion * this.alimentToCalculate.ig)/100;
    // Alim de List des aliment à displayer sur Calculator.html

    this.alimentCalculated  = {
      name : this.alimentToCalculate.name,
      ig : this.alimentToCalculate.ig,
      carbs : this.alimentToCalculate.carbs,
      portion : this.glycemicCharge
    }
    this.alimentCalculList.push(this.alimentCalculated);
    console.log("alimentlist " + this.alimentCalculated);
    return this.alimentCalculList;
  }

  deleteAlimentCalcul(aliment:Calcultor) {
    const index: number = this.alimentCalculList.indexOf(aliment);
    if (index !== -1) {
        this.alimentCalculList.splice(index, 1);
    }        
  }

}
