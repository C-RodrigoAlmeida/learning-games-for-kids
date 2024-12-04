import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Accessors } from 'src/frontend/app/core/models/accessors.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent<T> {
  @Input() headers: Accessors<T>[] = [];
  @Input() rows: T[] = [];

  getNestedProperty(obj: any, path: string | number | symbol): string {
    if (typeof path !== 'string') return '';

    const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);

    console.log(value);
    // If value is an array, join it with commas
    if (Array.isArray(value)) {
        return value.join(', ');
    }

    // If value is a media path, return it as an image source
    if (typeof value === 'string' && value.startsWith('/media/')) {
        return `<img src="${value}" alt="media">`;
    }

    // If value is a Date object, format it as dd/MM/yyyy
    if (value instanceof Date) {
        const day = value.getDate().toString().padStart(2, '0');
        const month = (value.getMonth() + 1).toString().padStart(2, '0');
        const year = value.getFullYear();
        return `${day}/${month}/${year}`;
    }

    // Return the value as a string
    return value?.toString() || '';
}

}
