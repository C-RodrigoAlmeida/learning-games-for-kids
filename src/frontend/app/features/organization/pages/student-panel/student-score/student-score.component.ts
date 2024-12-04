import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ExerciseScore {
  title: string;
  score: number;
}

interface StudentStats {
  averageScore: number;
  completedExercises: number;
  consecutiveCorrect: number;
  recentExercises: ExerciseScore[];
}

@Component({
  selector: 'app-student-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-score.component.html'
})
export class StudentScoreComponent implements OnInit {
  stats: StudentStats = {
    averageScore: 85,
    completedExercises: 24,
    consecutiveCorrect: 18,
    recentExercises: [
      { title: 'Sopa de Letras #1', score: 90 },
      { title: 'Sopa de Letras #2', score: 75 },
      { title: 'Sopa de Letras #3', score: 95 }
    ]
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aqui você irá fazer a chamada para o serviço que buscará os dados reais
    // this.studentScoreService.getStudentStats().subscribe(stats => {
    //   this.stats = stats;
    // });
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  getScoreColor(score: number): string {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  }
}
