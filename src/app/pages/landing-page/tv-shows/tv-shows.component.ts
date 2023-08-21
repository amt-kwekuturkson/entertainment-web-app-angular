import { Component } from '@angular/core';
import { MEDIA } from 'src/app/media';
import { MediaData } from 'src/app/types/interface';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
mediaFiles: MediaData[] = MEDIA;
normalFiles: MediaData[] = this.mediaFiles.filter(x => x.category === "TV Series");
}
