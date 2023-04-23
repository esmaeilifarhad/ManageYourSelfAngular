import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCallComponent } from './type-call.component';

describe('TypeCallComponent', () => {
  let component: TypeCallComponent;
  let fixture: ComponentFixture<TypeCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
