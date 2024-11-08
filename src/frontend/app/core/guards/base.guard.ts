import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { LocalStorageUtils } from 'src/frontend/app/shared/utils/localstorage';

@Injectable()
export class BaseGuard implements CanActivate {
    private localStorageUtils = new LocalStorageUtils();
    private claims: any;
    private valid: boolean = false;

    constructor(protected router: Router) { }

    canActivate(claim: ActivatedRouteSnapshot): Observable<boolean> | boolean {

        // this.claims = JSON.parse(localStorage.getItem('SFCV2-Claim'));

        // if(this.claims !=null){ 
        //   this.claims.forEach(element =>{
        //     if((element.type === claim.data.type && element.value === claim.data.value)){
        //       debugger;
        //       this.valid = true;

        //     }
        //   })
        // }

        if (this.localStorageUtils.usuarioLogado()) {
            console.log('logado')
            return true;
        }

        // if (this.localStorageUtils.usuarioLogado() && this.valid === false) {

        //   this.router.navigate(['/acesso-negado']);
        //   return false;
        // }

        this.router.navigate(['/home']);
        return false;
    }
}
