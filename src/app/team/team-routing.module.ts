import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team.component';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [{
      path: '',
      component: TeamComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
