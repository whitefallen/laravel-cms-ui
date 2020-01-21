import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AuthGuardService as AuthGuard} from '../auth/authGuardService';
import {PostComponent} from '../post/post.component';
import {PostdetailComponent} from '../postdetail/postdetail.component';
import {FormatComponent} from '../format/format.component';
import {FormatdetailComponent} from '../formatdetail/formatdetail.component';
import {EditformatComponent} from '../editformat/editformat.component';
import {CmsuiComponent} from '../cmsui/cmsui.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: CmsuiComponent, canActivate: [AuthGuard], children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'post', component: PostComponent, canActivate: [AuthGuard]},
      { path: 'post/:id', component: PostdetailComponent, canActivate: [AuthGuard]},
      { path: 'format', component: FormatComponent, canActivate: [AuthGuard]},
      { path: 'format/:id', component: FormatdetailComponent, canActivate: [AuthGuard]},
      { path: 'format/:id/edit', component: EditformatComponent, canActivate: [AuthGuard]},
    ] },
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
