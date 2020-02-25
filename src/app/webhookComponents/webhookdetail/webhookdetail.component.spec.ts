import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhookdetailComponent } from './webhookdetail.component';

describe('WebhookdetailComponent', () => {
  let component: WebhookdetailComponent;
  let fixture: ComponentFixture<WebhookdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebhookdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebhookdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
