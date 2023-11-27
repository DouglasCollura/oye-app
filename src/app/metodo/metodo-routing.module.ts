import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetodoComponent } from './metodo.component';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [{

  path: '',
  component: MetodoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetodoRoutingModule { }
