import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { DataService } from './data.service';
import { TrackService } from './track.service';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search/search.component';
import { PlayerComponent } from './player/player.component';
import { UserStatusComponent } from './user/user-status/user-status.component';
import { AlertComponent } from './user/alert/alert.component';
import { LoginComponent } from './user/login/login.component';
import { LoaderComponent } from './user/loader/loader.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes : Routes =[
  {path:'', redirectTo : 'tracks', pathMatch : 'full'},
  {path: 'user', loadChildren:() =>import('./user/user.module').then((mod)=>mod.UserModule)},
  {path: 'tracks', loadChildren:() =>import('./tracks/tracks.module').then((mod)=>mod.TracksModule)},
  {path: 'search', loadChildren:() =>import('./search/search.module').then((mod)=>mod.SearchModule)},
  {path: 'playlists', component: PlaylistsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlaylistsComponent,
    SearchComponent,
    PlayerComponent,
    UserStatusComponent,
    AlertComponent,
    LoginComponent,
    SignInComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataService,
    TrackService,
    SearchService,
  ],
  bootstrap: [AppComponent],
  entryComponents : [AlertComponent, LoginComponent, SignInComponent, LoaderComponent]
})
export class AppModule { }
