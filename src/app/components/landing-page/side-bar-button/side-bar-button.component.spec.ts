import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarButtonComponent } from './side-bar-button.component';

describe('SideBarButtonComponent', () => {
  let component: SideBarButtonComponent;
  let fixture: ComponentFixture<SideBarButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarButtonComponent]
    });
    fixture = TestBed.createComponent(SideBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
