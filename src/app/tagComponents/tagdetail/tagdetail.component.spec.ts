import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagdetailComponent } from './tagdetail.component';

describe('TagdetailComponent', () => {
  let component: TagdetailComponent;
  let fixture: ComponentFixture<TagdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
