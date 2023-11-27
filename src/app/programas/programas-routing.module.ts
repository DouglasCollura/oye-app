import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasComponent } from './programas.component';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [
  {

    path: '',
    component: ProgramasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }
