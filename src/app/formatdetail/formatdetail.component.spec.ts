import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatdetailComponent } from './formatdetail.component';

describe('FormatdetailComponent', () => {
  let component: FormatdetailComponent;
  let fixture: ComponentFixture<FormatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
