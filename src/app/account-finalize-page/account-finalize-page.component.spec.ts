import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFinalizePageComponent } from './account-finalize-page.component';

describe('AccountFinalizePageComponent', () => {
  let component: AccountFinalizePageComponent;
  let fixture: ComponentFixture<AccountFinalizePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFinalizePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFinalizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
