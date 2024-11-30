import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordListComponent } from './word-list/word-list.component';


const wordsRouterConfig: Routes = [
    {
        path: '/wordsList', component: WordListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(wordsRouterConfig)
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }