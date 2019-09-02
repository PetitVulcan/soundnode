import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './track/track.component';
import { TracksComponent } from './tracks/tracks.component';



@NgModule({
  declarations: [TrackComponent, TracksComponent],
  imports: [
    CommonModule
  ]
})
export class TracksModule { }
