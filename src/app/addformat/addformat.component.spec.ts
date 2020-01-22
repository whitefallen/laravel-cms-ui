import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformatComponent } from './addformat.component';

describe('AddformatComponent', () => {
  let component: AddformatComponent;
  let fixture: ComponentFixture<AddformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
