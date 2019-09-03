import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './track/track.component';
import { TracksComponent } from './tracks/tracks.component';
import { Routes, RouterModule } from '@angular/router';
import { TrackService } from 'src/app/track.service';

const routes: Routes = [
  {
    path: '',
    component: TracksComponent,
    children: [
      { path: ':type', component: TracksComponent },
      { path: ':type/:id', component: TracksComponent },
    ]
  }
];


@NgModule({
  declarations: [
    TrackComponent,
    TracksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [TrackService],
  bootstrap : [TrackComponent]
})
export class TracksModule { }
