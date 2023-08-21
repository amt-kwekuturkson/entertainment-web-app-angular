import { Component } from '@angular/core';
import { MediaData } from 'src/app/types/interface';
import { MEDIA } from 'src/app/media';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
mediaFiles: MediaData[] = MEDIA;

normalFiles = this.mediaFiles.filter(x =>  x.category === 'Movie')
}
