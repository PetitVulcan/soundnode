import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private ts: TrackService,
    private data: DataService,
    private router: Router,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Equivalent to const url = this.router.url;
    const { url } = this.router;

    // FIXME: change user id.
    this.data.getApi('get-user/1').subscribe(
      (res: any) => {
        if (res.error) {
          alert('Utilisateur inconnu !');
        } else {
          this.user = res.user;
          let tracks = [];

          if (url.includes('likes')) {
            tracks = this.ts.tracks.filter((t) => this.user.likes.includes(t.id));
          } else if (url.includes('playlist')) {
            const id = Number(this.ar.firstChild.snapshot.params.id);

            this.data.getApi(`get-playlist/${id}`).subscribe(
              (res2: any) => {
                if (res.error) {
                  alert('Playlist inconnue !');
                } else {
                  const { playlist } = res2;

                  tracks = this.ts.tracks.filter((t) => playlist.tracks.includes(t.id));
                  this.tracks = tracks;
                }
              },
              (err2: any) => {
                alert('Server error.');
              }
            );
          } else {
            tracks = this.ts.tracks;
          }

          tracks.forEach((t) => {
            if (this.user.likes.includes(t.id)) {
              t.likes = true;
            }
          });

          this.tracks = tracks;
        }
      },
      (err: any) => {
        alert('Server error.');
      }
    );
  }
}
