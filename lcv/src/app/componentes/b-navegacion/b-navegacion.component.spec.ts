import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BNavegacionComponent } from './b-navegacion.component';

describe('BNavegacionComponent', () => {
  let component: BNavegacionComponent;
  let fixture: ComponentFixture<BNavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BNavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
