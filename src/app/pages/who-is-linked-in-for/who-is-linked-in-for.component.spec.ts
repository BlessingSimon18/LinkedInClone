import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsLinkedInForComponent } from './who-is-linked-in-for.component';

describe('WhoIsLinkedInForComponent', () => {
  let component: WhoIsLinkedInForComponent;
  let fixture: ComponentFixture<WhoIsLinkedInForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoIsLinkedInForComponent]
    });
    fixture = TestBed.createComponent(WhoIsLinkedInForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
