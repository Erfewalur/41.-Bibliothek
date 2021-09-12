import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTableFormComponent } from './template-table-form.component';

describe('TemplateTableFormComponent', () => {
  let component: TemplateTableFormComponent;
  let fixture: ComponentFixture<TemplateTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
