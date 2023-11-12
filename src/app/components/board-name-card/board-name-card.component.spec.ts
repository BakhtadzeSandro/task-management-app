import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardNameCardComponent } from './board-name-card.component';

describe('BoardNameCardComponent', () => {
  let component: BoardNameCardComponent;
  let fixture: ComponentFixture<BoardNameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardNameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
