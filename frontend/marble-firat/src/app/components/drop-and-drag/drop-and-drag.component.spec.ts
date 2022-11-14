import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropAndDragComponent } from './drop-and-drag.component';

describe('DropAndDragComponent', () => {
  let component: DropAndDragComponent;
  let fixture: ComponentFixture<DropAndDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropAndDragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropAndDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
