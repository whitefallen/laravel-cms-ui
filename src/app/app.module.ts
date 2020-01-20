import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './core/material.module';
import {JwtHelperService} from '@auth0/angular-jwt';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './core/app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSidenavModule} from '@angular/material';
import { PostComponent } from './post/post.component';
import {SidebarModule} from 'ng-sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { PostdetailComponent } from './postdetail/postdetail.component';
import { FormatComponent } from './format/format.component';

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
    FormatComponent
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
    MatGridListModule
  ],
  providers: [
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
