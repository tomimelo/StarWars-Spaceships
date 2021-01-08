import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStarshipComponent } from './new-starship.component';

describe('NewStarshipComponent', () => {
  let component: NewStarshipComponent;
  let fixture: ComponentFixture<NewStarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
