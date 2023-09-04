import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleilComponent } from './soleil.component';

describe('SoleilComponent', () => {
  let component: SoleilComponent;
  let fixture: ComponentFixture<SoleilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoleilComponent]
    });
    fixture = TestBed.createComponent(SoleilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
