import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkStatusComponent } from './bookmark-status.component';

describe('BookmarkStatusComponent', () => {
  let component: BookmarkStatusComponent;
  let fixture: ComponentFixture<BookmarkStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkStatusComponent]
    });
    fixture = TestBed.createComponent(BookmarkStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
