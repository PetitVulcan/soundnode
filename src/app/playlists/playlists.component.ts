import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  playlists;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getApi('get-playlists/1').subscribe(
      (res: any) => {
        if (res.error) {
          alert('Utilisateur inconnu !');
        } else {
          this.playlists = res.playlists;
        }
      },
      (err: any) => {
        alert('Server error.');
      }
    );
  }
}
