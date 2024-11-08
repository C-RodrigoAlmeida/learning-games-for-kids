import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TableHeader } from 'src/frontend/app/core/models/table-header.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent<T> {
  @Input() headers: TableHeader<T>[] = [];
  @Input() rows: T[] = [];

  getNestedProperty(obj: any, path: string | number | symbol): string {
    if (typeof path !== 'string') return '';
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }
}
