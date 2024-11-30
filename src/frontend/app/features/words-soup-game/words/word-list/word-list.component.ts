import { Component, OnInit } from '@angular/core';

import { Word } from '../words.model';
import { WordService } from '../words.service';
import { TableHeader } from 'src/frontend/app/core/models/table-header.model'
import { TableComponent } from 'src/frontend/app/shared/components/table/table.component';

@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css'
})
export class WordListComponent implements OnInit {
  
  constructor(
    private _wordService: WordService
  ){}

  ngOnInit(): void {
    this._wordService.getWords().subscribe((data: any) => {
      this.rows = data.results;
    });
    
  }

  headers: TableHeader<Word>[] = [
    { label: 'Palavra', key: 'name' as keyof Word },
    { label: 'Criado em', key: 'created_at' as keyof Word },
    { label: 'Atualizado em', key: 'updated_at' as keyof Word }
  ];

  rows: Word[] = [];
}


