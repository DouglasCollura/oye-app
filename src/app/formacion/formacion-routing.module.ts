import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormacionComponent } from './formacion.component';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [{
      path: '',
      component: FormacionComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormacionRoutingModule { }
