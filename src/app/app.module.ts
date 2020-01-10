import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule } from '@angular/router';
import { AlimentcartComponent } from './alimentcart/alimentcart.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AlimentListComponent,
    CalculatorComponent,
    AlimentcartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
//      { path: '', component: AlimentcartComponent },
      { path: '', component: AlimentListComponent },
      { path: 'calculator', component:  CalculatorComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
