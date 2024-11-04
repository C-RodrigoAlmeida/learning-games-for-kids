import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { BaseService } from '../../services/base.service';

@Injectable({
    providedIn: 'root',
})
export class AccountService extends BaseService {
    page: any;
    rows: any;
    busca = '';
    endpointName = '/accounts/';

    constructor(private http: HttpClient) {
        super();
    }

    GetLoggedUser(): Observable<User> {
        return this.http
            .get<User>(
                this.UrlServiceV1 + this.endpointName + 'me',
                super.ObterHeaderJson()
            )
            .pipe(catchError(super.serviceError));
    }

    login(user: any): Observable<any> {
        let response = this.http
            .post(
                this.UrlServiceV1 + this.endpointName + 'login',
                JSON.stringify(user),
                this.ObterHeaderJson()
            )
            .pipe(map(this.extractData), catchError(this.serviceError));
        return response;
    }

    // obterTodos(event?: any, user?: User): Observable<User[]> {
    //   this.busca = '';
    // }

    // getUsersSemPaginacao() {
    //   return this.http
    //     .get<User>(
    //       this.UrlServiceV1 + 'url?pagesize=10',
    //       super.ObterHeaderJson()
    //     )
    //     .pipe(catchError(super.serviceError));
    // }
}
