import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentListComponent } from './aliment-list.component';

describe('AlimentListComponent', () => {
  let component: AlimentListComponent;
  let fixture: ComponentFixture<AlimentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
