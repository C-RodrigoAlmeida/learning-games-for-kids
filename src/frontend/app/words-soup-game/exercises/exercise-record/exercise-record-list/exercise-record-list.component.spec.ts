import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRecordListComponent } from './exercise-record-list.component';

describe('ExerciseRecordListComponent', () => {
  let component: ExerciseRecordListComponent;
  let fixture: ComponentFixture<ExerciseRecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseRecordListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
