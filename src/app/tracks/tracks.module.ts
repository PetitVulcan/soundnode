import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './track/track.component';
import { TracksComponent } from './tracks/tracks.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path:'',component:TrackComponent,children:[
    {path:'track',component : TrackComponent },
    {path:'tracks',component  : TracksComponent},
  ]}
]


@NgModule({
  declarations: [
    TrackComponent, 
    TracksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  bootstrap : [TrackComponent]
})
export class TracksModule { }
