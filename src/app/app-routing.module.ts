import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFormComponent } from './pages/home-form/home-form.component';
import { JoinComponent } from './pages/join/join.component';
import { OpentoworkComponent } from './pages/opentowork/opentowork.component';
import { PostjobComponent } from './pages/postjob/postjob.component';
import { WhoIsLinkedInForComponent } from './pages/who-is-linked-in-for/who-is-linked-in-for.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FindjobComponent } from './pages/findjob/findjob.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { LinksComponent } from './pages/links/links.component';
import { BoxesComponent } from './pages/boxes/boxes.component';
import { CirclesComponent } from './pages/circles/circles.component';

const routes: Routes = [
  {path:'', component:HomeFormComponent},
  {path:'join', component:JoinComponent},
  {path:'opentowork', component:OpentoworkComponent},
  {path:'postjob', component:PostjobComponent},
  {path:'whoislinkedinfor', component:WhoIsLinkedInForComponent},
  {path:'explore', component:ExploreComponent},
  {path:'findjob', component:FindjobComponent},
  {path:'connect', component:ConnectComponent},
  {path:'links', component:LinksComponent},
  {path:'boxes', component:BoxesComponent},
  {path:'circles', component:CirclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
