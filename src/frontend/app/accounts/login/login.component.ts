import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormBaseComponent } from 'src/frontend/app/shared/components/form-base.component';
import { User, UserLoginForm } from 'src/frontend/app/accounts/user.model';
import { RetornosComponent } from 'src/frontend/app/shared/components/retornos/retornos.component';
import { LocalStorageUtils } from 'src/frontend/app/shared/utils/localstorage';
import { AccountService } from '../account.service';
import { SharedComponent } from '../../shared/components/shared.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [
        CommonModule,
        SharedComponent,
        ReactiveFormsModule,
        InputTextModule,
        FloatLabelModule
    ],
    providers: [
        ConfirmationService,
        DialogService,
        RetornosComponent
    ]
})
export class LoginComponent extends FormBaseComponent implements OnInit {
    @ViewChildren(FormControlName, { read: ElementRef })
    localStorageUtils = new LocalStorageUtils();
    formInputElements: ElementRef[];
    errors: any[] = [];
    loginForm: FormGroup;
    user: User;
    returnUrl: string;

    userLogin: UserLoginForm;

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
            email: {
                required: 'Informe o email',
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
        this.loginForm = this.fb.group({
            email: [this.userLogin.Email, [Validators.required]],
            password: [this.userLogin.Password, [Validators.required]]
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
