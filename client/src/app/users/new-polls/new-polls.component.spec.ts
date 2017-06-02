import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPollsComponent } from './new-polls.component';

describe('NewPollsComponent', () => {
  let component: NewPollsComponent;
  let fixture: ComponentFixture<NewPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
