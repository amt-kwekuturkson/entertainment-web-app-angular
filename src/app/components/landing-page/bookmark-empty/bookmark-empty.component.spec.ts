import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkEmptyComponent } from './bookmark-empty.component';

describe('BookmarkEmptyComponent', () => {
  let component: BookmarkEmptyComponent;
  let fixture: ComponentFixture<BookmarkEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkEmptyComponent]
    });
    fixture = TestBed.createComponent(BookmarkEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
