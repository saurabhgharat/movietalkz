import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieyearsComponent } from './movieyears.component';

describe('MovieyearsComponent', () => {
  let component: MovieyearsComponent;
  let fixture: ComponentFixture<MovieyearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieyearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieyearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
