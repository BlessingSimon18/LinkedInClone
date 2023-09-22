import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { HomeFormComponent } from './pages/home-form/home-form.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FindjobComponent } from './pages/findjob/findjob.component';
import { PostjobComponent } from './pages/postjob/postjob.component';
import { OpentoworkComponent } from './pages/opentowork/opentowork.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { WhoIsLinkedInForComponent } from './pages/who-is-linked-in-for/who-is-linked-in-for.component';
import { JoinComponent } from './pages/join/join.component';
import { LinksComponent } from './pages/links/links.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './pages/input/input.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeFormComponent,
    ExploreComponent,
    FindjobComponent,
    PostjobComponent,
    OpentoworkComponent,
    ConnectComponent,
    WhoIsLinkedInForComponent,
    JoinComponent,
    LinksComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  schemas:[NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
