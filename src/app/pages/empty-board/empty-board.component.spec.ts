import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBoardComponent } from './empty-board.component';

describe('EmptyBoardComponent', () => {
  let component: EmptyBoardComponent;
  let fixture: ComponentFixture<EmptyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
