import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewNoticeComponent } from './create-new-notice.component';

describe('CreateNewNoticeComponent', () => {
  let component: CreateNewNoticeComponent;
  let fixture: ComponentFixture<CreateNewNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
