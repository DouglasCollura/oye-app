import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'consulta',
        loadChildren: () => import('./../consulta/consulta.module').then( m => m.ConsultaModule)
      },
      {
        path: 'formacion',
        loadChildren: () => import('./../formacion/formacion.module').then( m => m.FormacionModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./../team/team.module').then( m => m.TeamModule)
      },
      {
        path: 'programas',
        loadChildren: () => import('./../programas/programas.module').then( m => m.ProgramasModule)
      },
      {
        path: 'metodo',
        loadChildren: () => import('./../metodo/metodo.module').then( m => m.MetodoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
