import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpNavegacionComponent } from './carp-navegacion.component';

describe('CarpNavegacionComponent', () => {
  let component: CarpNavegacionComponent;
  let fixture: ComponentFixture<CarpNavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpNavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
