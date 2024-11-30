import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseScheduleListComponent } from './exercise-schedule-list.component';

describe('ExerciseScheduleListComponent', () => {
  let component: ExerciseScheduleListComponent;
  let fixture: ComponentFixture<ExerciseScheduleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseScheduleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
