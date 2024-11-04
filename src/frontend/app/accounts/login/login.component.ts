import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormBaseComponent } from 'src/frontend/app/base-components/form-base.component';
import { User } from 'src/frontend/app/models/user.model';
import { RetornosComponent } from 'src/frontend/app/retornos/retornos.component';
import { LocalStorageUtils } from 'src/frontend/app/utils/localstorage';
import { AccountService } from '../services/account.service';
import { SharedComponent } from 'src/frontend/app/shared/shared.component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [
        // CommonModule,
        SharedComponent
    ],
    providers: [
        ConfirmationService,
        DialogService,
        RetornosComponent
    ]
})
export class LoginComponent extends FormBaseComponent implements OnInit {
    @ViewChildren(FormControlName, { read: ElementRef })
    formInputElements: ElementRef[];
    errors: any[] = [];
    loginForm: FormGroup;
    user: User;
    json: any;
    returnUrl: string;
    localStorageUtils = new LocalStorageUtils();
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        public retornosComponent: RetornosComponent,
        public accountService: AccountService,
        private messageService: MessageService

    ) {
        super();

        this.validationMessages = {
            username: {
                required: 'Informe o usuário',
            },
            password: {
                required: 'Informe a senha',
                rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
            },
        };

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

        super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    ngOnInit(): void {
        console.log('LOGIN')

        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    ngAfterViewInit(): void {
        super.configurarValidacaoFormularioBase(
            this.formInputElements,
            this.loginForm
        );
    }

    login() {
        if (this.loginForm.dirty && this.loginForm.valid) {
            this.user = Object.assign({}, this.user, this.loginForm.value);
            let data = {
                user: this.user,
            };

            console.log('user');
            console.log(this.user);

            this.accountService.login(this.user)
                .subscribe(
                    sucesso => {
                        this.processarSucesso(sucesso)
                    },
                    falha => {
                        this.processarFalha(falha)
                    }
                );
        }
    }

    private delay(ms: number): Promise<boolean> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }

    async processarSucesso(response: any) {
        this.loginForm.reset();
        this.errors = [];
        debugger;
        this.accountService.LocalStorage.saveLocalUserData(response);
        // await this.delay(3000);
        this.redirecionarRota('home');
        await this.delay(200);
        console.log('Bem-vindo ' + this.user.Username)
        // this.retornosComponent.toastSucesso('Bem-vindo ' + this.user.username)

        // this.returnUrl
        //   ? this.router.navigate([this.returnUrl])
        //   : this.router.navigate(['/home']);
    }


    public redirecionarRota(uri: string) {
        this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate([uri]))
    }

    processarFalha(fail: any) {
        console.log(fail)
        this.errors = fail.error.errors;
        // this.messageService.add({
        //   severity: 'error',
        //   summary: 'Erro',
        //   detail: 'Verifique o formulário!',
        // });
    }
}
