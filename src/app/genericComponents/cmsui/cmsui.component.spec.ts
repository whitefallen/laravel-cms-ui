import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsuiComponent } from './cmsui.component';

describe('CmsuiComponent', () => {
  let component: CmsuiComponent;
  let fixture: ComponentFixture<CmsuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
