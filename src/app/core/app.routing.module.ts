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
import {TopicComponent} from '../topicComponents/topic/topic.component';
import {TopicdetailComponent} from '../topicComponents/topicdetail/topicdetail.component';
import {EdittopicComponent} from '../topicComponents/edittopic/edittopic.component';
import {AddtopicComponent} from '../topicComponents/addtopic/addtopic.component';
import {TagComponent} from '../tagComponents/tag/tag.component';
import {TagdetailComponent} from '../tagComponents/tagdetail/tagdetail.component';
import {EdittagComponent} from '../tagComponents/edittag/edittag.component';
import {AddtagComponent} from '../tagComponents/addtag/addtag.component';
import {EditpostComponent} from '../postComponents/editpost/editpost.component';
import {AddpostComponent} from '../postComponents/addpost/addpost.component';
import {AddwebhookComponent} from '../webhookComponents/addwebhook/addwebhook.component';
import {WebhookComponent} from '../webhookComponents/webhook/webhook.component';
import {WebhookdetailComponent} from '../webhookComponents/webhookdetail/webhookdetail.component';
import {EditwebhookComponent} from '../webhookComponents/editwebhook/editwebhook.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: CmsuiComponent, canActivate: [AuthGuard], children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'post', component: PostComponent, canActivate: [AuthGuard]},
      { path: 'post/:id/detail', component: PostdetailComponent, canActivate: [AuthGuard]},
      { path: 'post/:id/edit', component: EditpostComponent, canActivate: [AuthGuard]},
      { path: 'post/add', component: AddpostComponent, canActivate: [AuthGuard]},
      { path: 'format', component: FormatComponent, canActivate: [AuthGuard]},
      { path: 'format/:id/detail', component: FormatdetailComponent, canActivate: [AuthGuard]},
      { path: 'format/:id/edit', component: EditformatComponent, canActivate: [AuthGuard]},
      { path: 'format/add', component: AddformatComponent, canActivate: [AuthGuard]},
      { path: 'topic', component: TopicComponent, canActivate: [AuthGuard]},
      { path: 'topic/:id/detail', component: TopicdetailComponent, canActivate: [AuthGuard]},
      { path: 'topic/:id/edit', component: EdittopicComponent, canActivate: [AuthGuard]},
      { path: 'topic/add', component: AddtopicComponent, canActivate: [AuthGuard]},
      { path: 'tag', component: TagComponent, canActivate: [AuthGuard]},
      { path: 'tag/:id/detail', component: TagdetailComponent, canActivate: [AuthGuard]},
      { path: 'tag/:id/edit', component: EdittagComponent, canActivate: [AuthGuard]},
      { path: 'tag/add', component: AddtagComponent, canActivate: [AuthGuard]},
      { path: 'webhook', component: WebhookComponent, canActivate: [AuthGuard]},
      { path: 'webhook/add', component: AddwebhookComponent, canActivate: [AuthGuard]},
      { path: 'webhook/:id/detail', component: WebhookdetailComponent, canActivate: [AuthGuard]},
      { path: 'webhook/:id/edit', component: EditwebhookComponent, canActivate: [AuthGuard]},

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
