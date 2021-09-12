import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpingComponent } from './eventping.component';

describe('EventpingComponent', () => {
  let component: EventpingComponent;
  let fixture: ComponentFixture<EventpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventpingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
