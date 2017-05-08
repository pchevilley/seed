import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterActivationFormComponent } from './register-activation-form.component';

describe('RegisterActivationFormComponent', () => {
  let component: RegisterActivationFormComponent;
  let fixture: ComponentFixture<RegisterActivationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterActivationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterActivationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
