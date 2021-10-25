import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaterial2Component } from './form-material2.component';

describe('FormMaterial2Component', () => {
  let component: FormMaterial2Component;
  let fixture: ComponentFixture<FormMaterial2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMaterial2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaterial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
