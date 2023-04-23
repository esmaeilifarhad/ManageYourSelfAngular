import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegisterFormComponent } from './create-register-form.component';

describe('CreateRegisterFormComponent', () => {
  let component: CreateRegisterFormComponent;
  let fixture: ComponentFixture<CreateRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
