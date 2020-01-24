import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformatComponent } from './editformat.component';

describe('EditformatComponent', () => {
  let component: EditformatComponent;
  let fixture: ComponentFixture<EditformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
