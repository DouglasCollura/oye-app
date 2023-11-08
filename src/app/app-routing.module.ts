import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaModule)
  },
  {
    path: 'formacion',
    loadChildren: () => import('./formacion/formacion.module').then( m => m.FormacionModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamModule)
  },
  {
    path: 'programas',
    loadChildren: () => import('./programas/programas.module').then( m => m.ProgramasModule)
  },
  {
    path: 'metodo',
    loadChildren: () => import('./metodo/metodo.module').then( m => m.MetodoModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
