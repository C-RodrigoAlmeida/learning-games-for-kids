import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseService } from '../../exercises/exercise/exercise.service';
@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play.component.html'
})
export class PlayComponent {

    constructor(
        private exerciseService: ExerciseService
    ){}
}