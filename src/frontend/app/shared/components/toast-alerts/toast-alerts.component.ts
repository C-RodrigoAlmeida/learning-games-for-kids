import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

@Component({
    standalone: true,
    selector: 'retornos-mensagens',
    templateUrl: './toast-alerts.component.html',
    styleUrls: ['./toast-alerts.component.css'],
    imports: [
        MessageModule,
        MessagesModule
    ]
})
export class RetornosComponent implements OnInit {
    retorno: Message[] = [];

    // msgs: any[] = [];

    // constructor(public messageService1: MessageService) { }

    ngOnInit(): void { }

    // processarRetorno(retorno?: any, message?: string) {
    //   this.limpaRetornos();

    //   if (retorno?.ok === false || message == undefined) {
    //     console.log("entrou if erro")
    //     retorno.error.errors != undefined ? this.msgs.push(this.montaMsgErro(retorno.error.errors)) : this.msgs.push(this.montaMsgErro(retorno.error.errorMessage))
    //     this.retorno = this.msgs;
    //     this.msgs = [];
    //   } else {
    //     this.toastSucesso(message);
    //   }
    // }

    // private montaMsgErro(erro) {
    //   return {
    //     severity: 'error',
    //     summary: 'Erro',
    //     detail: erro,
    //   };
    // }

    // toastSucesso(success) {
    //   this.messageService1.add({
    //     severity: 'success',
    //     summary: 'Sucesso',
    //     detail: success,
    //     life: 5000
    //   });
    // }

    // toastErro(success) {
    //   this.messageService1.add({
    //     severity: 'error',
    //     summary: 'Erro',
    //     detail: success,
    //     life: 5000
    //   });
    // }

    // private limpaRetornos() {
    //   this.messageService1.clear();
    // }
}
