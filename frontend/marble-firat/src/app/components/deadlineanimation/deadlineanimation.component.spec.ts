import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineanimationComponent } from './deadlineanimation.component';

describe('DeadlineanimationComponent', () => {
  let component: DeadlineanimationComponent;
  let fixture: ComponentFixture<DeadlineanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadlineanimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlineanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
