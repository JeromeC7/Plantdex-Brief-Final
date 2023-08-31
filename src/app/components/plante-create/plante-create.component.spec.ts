import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteCreateComponent } from './plante-create.component';

describe('PlanteCreateComponent', () => {
  let component: PlanteCreateComponent;
  let fixture: ComponentFixture<PlanteCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanteCreateComponent]
    });
    fixture = TestBed.createComponent(PlanteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
