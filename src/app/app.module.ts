import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './genericComponents/login/login.component';
import { CustomMaterialModule } from './core/material.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './core/app.routing.module';
import { DashboardComponent } from './dashboardComponents/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './genericComponents/toolbar/toolbar.component';
import { PageNotFoundComponent } from './genericComponents/page-not-found/page-not-found.component';
import { MatSidenavModule } from '@angular/material';
import { PostComponent } from './postComponents/post/post.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './genericComponents/sidebar/sidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostdetailComponent } from './postComponents/postdetail/postdetail.component';
import { FormatComponent } from './formatComponents/format/format.component';
import { EditformatComponent } from './formatComponents/editformat/editformat.component';
import { FormatdetailComponent } from './formatComponents/formatdetail/formatdetail.component';
import { CmsuiComponent } from './genericComponents/cmsui/cmsui.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AddformatComponent } from './formatComponents/addformat/addformat.component';
import { TopicComponent } from './topicComponents/topic/topic.component';
import { AddtopicComponent } from './topicComponents/addtopic/addtopic.component';
import { EdittopicComponent } from './topicComponents/edittopic/edittopic.component';
import { TopicdetailComponent } from './topicComponents/topicdetail/topicdetail.component';
import { AddtagComponent } from './tagComponents/addtag/addtag.component';
import { EdittagComponent } from './tagComponents/edittag/edittag.component';
import { TagComponent } from './tagComponents/tag/tag.component';
import { TagdetailComponent } from './tagComponents/tagdetail/tagdetail.component';
import { AddpostComponent } from './postComponents/addpost/addpost.component';
import { EditpostComponent } from './postComponents/editpost/editpost.component';
import { BaseComponent } from './baseComponents/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    PostComponent,
    SidebarComponent,
    PostdetailComponent,
    EditformatComponent,
    FormatComponent,
    FormatdetailComponent,
    CmsuiComponent,
    AddformatComponent,
    TopicComponent,
    AddtopicComponent,
    EdittopicComponent,
    TopicdetailComponent,
    AddtagComponent,
    EdittagComponent,
    TagComponent,
    TagdetailComponent,
    AddpostComponent,
    EditpostComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SidebarModule.forRoot(),
    MatGridListModule,
    MatProgressBarModule
  ],
  providers: [
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
