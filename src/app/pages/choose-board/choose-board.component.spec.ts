import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBoardComponent } from './choose-board.component';

describe('ChooseBoardComponent', () => {
  let component: ChooseBoardComponent;
  let fixture: ComponentFixture<ChooseBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
