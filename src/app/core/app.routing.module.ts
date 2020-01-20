import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AuthGuardService as AuthGuard} from '../auth/authGuardService';
import {PostComponent} from '../post/post.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'post', component: PostComponent, canActivate: [AuthGuard]},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
