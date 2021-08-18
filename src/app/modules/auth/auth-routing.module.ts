import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../../pages/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../../pages/auth/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('../../pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
