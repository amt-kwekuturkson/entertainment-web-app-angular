import { Component } from '@angular/core';
import { MEDIA } from 'src/app/media';
import { MediaData } from 'src/app/types/interface';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.css']
})
export class BookmarkedComponent {
  mediaFiles: MediaData[] = MEDIA;
  normalFiles:MediaData[] = this.mediaFiles.filter(x => x.isBookmarked === true );
}
