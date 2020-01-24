import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../genericComponents/login/login.component';
import {DashboardComponent} from '../dashboardComponents/dashboard/dashboard.component';
import {PageNotFoundComponent} from '../genericComponents/page-not-found/page-not-found.component';
import {AuthGuardService as AuthGuard} from '../auth/authGuardService';
import {PostComponent} from '../postComponents/post/post.component';
import {PostdetailComponent} from '../postComponents/postdetail/postdetail.component';
import {FormatComponent} from '../formatComponents/format/format.component';
import {FormatdetailComponent} from '../formatComponents/formatdetail/formatdetail.component';
import {EditformatComponent} from '../formatComponents/editformat/editformat.component';
import {CmsuiComponent} from '../genericComponents/cmsui/cmsui.component';
import {AddformatComponent} from '../formatComponents/addformat/addformat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: CmsuiComponent, canActivate: [AuthGuard], children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'post', component: PostComponent, canActivate: [AuthGuard]},
      { path: 'post/:id/detail', component: PostdetailComponent, canActivate: [AuthGuard]},
      { path: 'format', component: FormatComponent, canActivate: [AuthGuard]},
      { path: 'format/:id/detail', component: FormatdetailComponent, canActivate: [AuthGuard]},
      { path: 'format/:id/edit', component: EditformatComponent, canActivate: [AuthGuard]},
      { path: 'format/add', component: AddformatComponent, canActivate: [AuthGuard]}
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
