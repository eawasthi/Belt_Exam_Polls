import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPollsComponent } from './current-polls.component';

describe('CurrentPollsComponent', () => {
  let component: CurrentPollsComponent;
  let fixture: ComponentFixture<CurrentPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
