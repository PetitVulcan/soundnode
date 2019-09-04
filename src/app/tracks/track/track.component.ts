import {
    Component, OnInit, Input, ViewChild, ElementRef, ComponentFactoryResolver,
} from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  @Input() track;

  @ViewChild('player', { static: false }) player: ElementRef

  user;

  constructor(private data: DataService, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // FIXME: change user id.
    const id = 1;
    this.data.getApi(`get-user/${id}`).subscribe(
      (res: any) => {
        if (res.error) {
          alert('Utilisateur inconnu !');
        } else {
          this.user = res.user;
        }
      },
      (err: any) => {
        alert('Server error.');
      }
    );
  }

  like = (): void => {
    // FIXME: change user id.
    const id = 1;
    const isLiked = this.user.likes.includes(this.track.id);

    // Like or unlike this track based on its current status.
    this.data.getApi(`user-like-track/${id}/${this.track.id}/${isLiked}`).subscribe(
      (res: any) => {
        if (res.error) {
          // FIXME: better message error.
          alert('Erreur !');
        } else {
          this.user.likes = res.likes;

          alert(`Track ${isLiked ? 'un' : ''}liked!`);
        }
      },
      (err: any) => {
        alert('Server error.');
      }
    );
  };

  play = (): void => {
    
  };
}
