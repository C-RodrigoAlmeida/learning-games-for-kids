import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/frontend/environments/environment';
import { LocalStorageUtils } from 'src/frontend/app/shared/utils/localstorage';

export abstract class BaseService {
    protected UrlServiceV1: string = environment.apiUrlv1;
    public LocalStorage = new LocalStorageUtils();
    private accessToken: string = "";

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
    }

    protected ObterAuthHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': this.LocalStorage.getUserToken()
            }),
        };
    }

    protected extractData(response: any) {
        if (response.authentication_token) {
            return response || {};
        }
        return response.data || {};
    }

    // private tokenExpired(token: string) {
    //   const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    //   return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    // }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];
        let customResponse = { error: { errors: [] } };

        if (response instanceof HttpErrorResponse) {
            if (response.statusText === 'Unknown Error') {
                customError.push('Ocorreu um erro desconhecido');
                response.error.errors = customError;
            }
        }

        if (response.status === 503) {
            customError.push(
                'Serviço indisponível no momento, tente novamente mais tarde ou contate o nosso suporte.'
            );
        }


        if (response.status === 401) {
            if (localStorage.getItem('X-CSRFTOKEN') != "") {
                customError.push('Token Expirado.');
                customResponse.error.errors = customError;

                console.error(customResponse);

                localStorage.removeItem('X-CSRFTOKEN');
                // localStorage.setItem('X-CSRFTOKEN-Expirado', 'true');

                debugger;
                return throwError(customResponse);
            }
        }

        // if (response.status === 500) {
        //   customError.push(
        //     'Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.'
        //   );

        //   // Erros do tipo 500 não possuem uma lista de erros
        //   // A lista de erros do HttpErrorResponse é readonly
        //   customResponse.error.errors = customError;
        //   return throwError(customResponse);
        // }

        // if (response.status === 422) {
        //   customError.push('teste');

        //   // Erros do tipo 500 não possuem uma lista de erros
        //   // A lista de erros do HttpErrorResponse é readonly
        //   customResponse.error.errors = customError;
        //   return throwError(customResponse);
        // }

        console.error(response);
        return throwError(response);
    }
}
