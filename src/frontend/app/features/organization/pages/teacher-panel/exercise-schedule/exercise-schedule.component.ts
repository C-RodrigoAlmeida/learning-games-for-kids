import { Component } from '@angular/core';
import { SidebarComponent } from 'src/frontend/app/shared/components/sidebar/sidebar.component';
import { ExerciseService } from 'src/frontend/app/features/words-soup-game/exercises/exercise/exercise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../../../organization/organization.service';
import { AcademicClass } from '../../../academic-classes/academic-class.model';
import { ExerciseScheduleService } from 'src/frontend/app/features/words-soup-game/exercises/exercise-schedule/exercise-schedule.service';
import { Exercise } from 'src/frontend/app/features/words-soup-game/exercises/exercise/exercise.model';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExerciseSchedule } from 'src/frontend/app/features/words-soup-game/exercises/exercise-schedule/exercise-schedule.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, SidebarComponent, ReactiveFormsModule],
  selector: 'app-exercise-schedule',
  templateUrl: './exercise-schedule.component.html'
})
export class ExerciseScheduleComponent {
    formSchedule: FormGroup;
    academicClasses: AcademicClass[] = [];
    exercise: Exercise;

    constructor(
        private formBuilder: FormBuilder,
        private exerciseScheduleService: ExerciseScheduleService,
        private organizationService: OrganizationService,
        private exerciseService: ExerciseService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ){
        this.organizationService.getAcademicClasses().subscribe(
            (data: any) => {
                console.log(data);
                this.academicClasses = data.results;
            }
        )
        this.activatedRoute.params.subscribe(params => {
            const id = params['id'];
            this.exerciseService.getExercise(id).subscribe(
                (data: any) => {
                    console.log(data);
                    this.exercise = data;
                }
            )
        })

        this.formBuilder.nonNullable.group({
            deadline: ['', [Validators.required]],
            academicClass: ['', [Validators.required]]
        })
    }


    onSubmit(): void {
        const schedule: ExerciseSchedule = {
            academic_class: this.formSchedule.value.academicClass,
            deadline: this.formSchedule.value.deadline,
            exercise: this.exercise
        }

        this.exerciseScheduleService.createExerciseSchedule(schedule).subscribe(
            (data: any) => {
                console.log(data);
                this.router.navigate(['teacher/panel']);
            }
        )
    }
}

