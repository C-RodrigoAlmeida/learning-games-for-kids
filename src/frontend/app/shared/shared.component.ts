import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    PaginatorModule,
    ToastModule,
    InputTextModule,
    BreadcrumbModule,
    CardModule,
    BadgeModule,
    DividerModule,
    ConfirmPopupModule,
    InputTextareaModule,
    ReactiveFormsModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
  ]
})
export class SharedComponent { }