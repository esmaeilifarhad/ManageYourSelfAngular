import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouplingComponentComponent } from './decoupling-component.component';

describe('DecouplingComponentComponent', () => {
  let component: DecouplingComponentComponent;
  let fixture: ComponentFixture<DecouplingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecouplingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecouplingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
