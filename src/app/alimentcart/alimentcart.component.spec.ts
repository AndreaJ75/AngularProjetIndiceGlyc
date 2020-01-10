import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentcartComponent } from './alimentcart.component';

describe('AlimentcartComponent', () => {
  let component: AlimentcartComponent;
  let fixture: ComponentFixture<AlimentcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
