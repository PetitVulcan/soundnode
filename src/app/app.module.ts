import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';


const routes : Routes =[
  {path:'', redirectTo : 'tracks', pathMatch : 'full'},
  {path: 'tracks', loadChildren:() =>import('./tracks/tracks.module').then((mod)=>mod.TracksModule)},
  {path: 'search', loadChildren:() =>import('./search/search.module').then((mod)=>mod.SearchModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
