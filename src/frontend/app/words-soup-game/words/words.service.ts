import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/frontend/app/core/services/base.service';
import { Word } from './words.model';

@Injectable({
    providedIn: 'root',
})
export class WordService extends BaseService {
    page: any;
    rows: any;
    search = '';
    endpointName = '/words/';

    constructor(private http: HttpClient) {
        super();
    }

    getWord(id: number): Observable<Word> {
        return this.http.get<Word>(
            this.UrlServiceV1 + this.endpointName + id
        ).pipe(catchError(super.serviceError));
    }

    getWords(): Observable<Word[]> {
        return this.http.get<Word[]>(
            this.UrlServiceV1 + this.endpointName
        ).pipe(catchError(super.serviceError));
    }

    createWord(word: Word): Observable<Word> {
        return this.http.post<Word>(
            this.UrlServiceV1 + this.endpointName,
            word
        ).pipe(map(this.extractData), catchError(this.serviceError));
    }

    updateWord(id: number, word: Word): Observable<Word> {
        return this.http.put<Word>(
            this.UrlServiceV1 + this.endpointName + id + '/',
            word
        ).pipe(map(this.extractData), catchError(this.serviceError));
    }

    deleteWord(id: number): Observable<Word> {
        return this.http.delete<Word>(
            this.UrlServiceV1 + this.endpointName + id,
            this.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }
}
