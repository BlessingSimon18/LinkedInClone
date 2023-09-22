import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentoworkComponent } from './opentowork.component';

describe('OpentoworkComponent', () => {
  let component: OpentoworkComponent;
  let fixture: ComponentFixture<OpentoworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpentoworkComponent]
    });
    fixture = TestBed.createComponent(OpentoworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
