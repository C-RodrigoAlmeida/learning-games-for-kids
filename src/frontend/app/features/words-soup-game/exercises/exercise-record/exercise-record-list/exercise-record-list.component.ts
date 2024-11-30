import { Component, OnInit } from '@angular/core';

import { ExerciseRecord } from '../exercise-record.model'; 
import { ExerciseRecordService } from '../exercise-record.service'; 
import { TableHeader } from 'src/frontend/app/core/models/table-header.model'
import { TableComponent } from 'src/frontend/app/shared/components/table/table.component';

@Component({
  selector: 'app-exercise-record-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './exercise-record-list.component.html',
  styleUrl: './exercise-record-list.component.css'
})
export class ExerciseRecordListComponent implements OnInit {
  
  constructor(
    private _exerciseRecordService: ExerciseRecordService
  ){}

  ngOnInit(): void {
    this._exerciseRecordService.getExerciseRecords().subscribe((data: any) => {
      console.log(data);
      this.rows = data.results;
    });
    
  }

  headers: TableHeader<ExerciseRecord>[] = [
    { label: 'Nome', key: 'student.first_name' as keyof ExerciseRecord },
    { label: 'Sobrenome', key: 'student.last_name' as keyof ExerciseRecord },
    { label: 'Contato', key: 'student.email' as keyof ExerciseRecord },
    { label: 'Realizado em', key: 'created_at' as keyof ExerciseRecord },
    { label: 'Horario inicial', key: 'schedule.created_at' as keyof ExerciseRecord },
    { label: 'Horario final', key: 'schedule.deadline' as keyof ExerciseRecord },
    { label: 'Atualizado em', key: 'updated_at' as keyof ExerciseRecord },
  ];

  rows: ExerciseRecord[] = [];
}
