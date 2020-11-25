import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookkingComponent } from './bookking.component';

describe('BookkingComponent', () => {
  let component: BookkingComponent;
  let fixture: ComponentFixture<BookkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
