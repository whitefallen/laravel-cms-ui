import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwebhookComponent } from './addwebhook.component';

describe('AddwebhookComponent', () => {
  let component: AddwebhookComponent;
  let fixture: ComponentFixture<AddwebhookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwebhookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwebhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
