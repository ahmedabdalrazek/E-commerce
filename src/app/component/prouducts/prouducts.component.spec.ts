import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductsComponent } from './prouducts.component';

describe('ProuductsComponent', () => {
  let component: ProuductsComponent;
  let fixture: ComponentFixture<ProuductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProuductsComponent]
    });
    fixture = TestBed.createComponent(ProuductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
