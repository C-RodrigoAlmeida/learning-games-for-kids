import { Component, OnInit } from '@angular/core';

import { Exercise } from "../exercise.model";
import { ExerciseService } from "../exercise.service";
import { TableHeader } from 'src/frontend/app/core/models/table-header.model'
import { TableComponent } from 'src/frontend/app/shared/components/table/table.component';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent implements OnInit {
  
  constructor(
    private _exerciseService: ExerciseService
  ){}

  ngOnInit(): void {
    this._exerciseService.getExercises().subscribe((data: any) => {
      console.log(data);
      this.rows = data.results;
    });
    
  }

  headers: TableHeader<Exercise>[] = [
    { label: 'Palavra Certa', key: 'correct_word.name' as keyof Exercise },
    { label: 'Público?', key: 'is_public' as keyof Exercise },
    { label: 'Organização', key: 'organization.name' as keyof Exercise },
    { label: 'Criado em', key: 'created_at' as keyof Exercise },
    { label: 'Atualizado em', key: 'updated_at' as keyof Exercise },
  ];

  rows: Exercise[] = [];
}
