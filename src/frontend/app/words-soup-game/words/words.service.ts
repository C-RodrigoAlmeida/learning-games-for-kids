import { Observable } from 'rxjs';
import { Word } from './words.model';
import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { PaginatedResponse } from '../../core/models/paginated-response.interface';

@Injectable({
    providedIn: 'root',
})
export class WordService {
    endpointURL = '/words/';

    constructor(private apiService: ApiService) {}

    getWord(id: number): Observable<Word> {
        return this.apiService.getOne<Word>(`${this.endpointURL}${id}`);
    }

    getWords(): Observable<PaginatedResponse<Word>> {
        return this.apiService.get<Word>(this.endpointURL);
    }

    createWord(word: Word): Observable<Word> {
        return this.apiService.post<Word>(this.endpointURL, word);
    }

    updateWord(id: number, word: Word): Observable<Word> {
        return this.apiService.put<Word>(this.endpointURL, word);
    }

    deleteWord(id: number): Observable<Word> {
        return this.apiService.delete<Word>(`${this.endpointURL}${id}`);
    }
}
