import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundItemComponent } from './background-item.component';

describe('BackgroundItemComponent', () => {
  let component: BackgroundItemComponent;
  let fixture: ComponentFixture<BackgroundItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});