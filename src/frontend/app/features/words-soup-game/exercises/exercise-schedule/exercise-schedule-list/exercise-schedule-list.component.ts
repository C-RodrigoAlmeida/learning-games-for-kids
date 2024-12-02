import { Component, OnInit } from '@angular/core';

import { ExerciseSchedule } from '../exercise-schedule.model'; 
import { ExerciseScheduleService } from '../exercise-schedule.service'; 
import { TableHeader } from 'src/frontend/app/core/models/accessors.model'
import { TableComponent } from 'src/frontend/app/shared/components/table/table.component';

@Component({
  selector: 'app-exercise-schedule-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './exercise-schedule-list.component.html',
  styleUrl: './exercise-schedule-list.component.css'
})
export class ExerciseScheduleListComponent implements OnInit {
  
  constructor(
    private _exerciseScheduleService: ExerciseScheduleService
  ){}

  ngOnInit(): void {
    this._exerciseScheduleService.getExerciseSchedules().subscribe((data: any) => {
      console.log(data);
      this.rows = data.results;
    });
    
  }

  headers: TableHeader<ExerciseSchedule>[] = [
    { label: 'Turma', key: 'academic_class.name' as keyof ExerciseSchedule },
    { label: 'Horario inicial', key: 'created_at' as keyof ExerciseSchedule },
    { label: 'Horario final', key: 'deadline' as keyof ExerciseSchedule },
    { label: 'Atualizado em', key: 'updated_at' as keyof ExerciseSchedule },
  ];

  rows: ExerciseSchedule[] = [];
}
