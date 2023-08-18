import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFullComponent } from './bookmark-full.component';

describe('BookmarkFullComponent', () => {
  let component: BookmarkFullComponent;
  let fixture: ComponentFixture<BookmarkFullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkFullComponent]
    });
    fixture = TestBed.createComponent(BookmarkFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
