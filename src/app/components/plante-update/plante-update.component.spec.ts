import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteUpdateComponent } from './plante-update.component';

describe('PlanteUpdateComponent', () => {
  let component: PlanteUpdateComponent;
  let fixture: ComponentFixture<PlanteUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanteUpdateComponent]
    });
    fixture = TestBed.createComponent(PlanteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
