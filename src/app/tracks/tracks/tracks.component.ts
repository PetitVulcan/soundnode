import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/track.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  tracks: Array<any>;

  user;

  constructor(private ts: TrackService, private data: DataService) { }

  ngOnInit() {
    this.tracks = this.ts.tracks;

    // FIXME: change user id.
    this.data.getApi('get-user/1').subscribe(
      (res: any) => {
        if (res.error) {
          alert('Utilisateur inconnu !');
        } else {
          this.user = res.user;

          this.tracks.forEach((t) => {
            if (this.user.likes.includes(t.id)) {
              t.likes = true;
            }
          });
        }
      },
      (err: any) => {
        alert('Server error.');
      }
    );
  }
}
