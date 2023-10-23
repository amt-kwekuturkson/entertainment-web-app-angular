import { Component,OnInit } from '@angular/core';
import { MediaData } from 'src/app/types/interface';
import { mediaService } from '../../../services/media.service';
import { MediaDataService } from 'src/app/services/media-data.service';
@Component({
  selector: 'carousel-wheel',
  templateUrl: './carousel-wheel.component.html',
  styleUrls: ['./carousel-wheel.component.css']
})
export class CarouselWheelComponent implements OnInit{
  
mediaFiles: MediaData[] = [];

constructor(private mediaDataService: MediaDataService){}

ngOnInit(): void {
this.mediaDataService.getMedia().subscribe((media) => (this.mediaFiles = media));
}

toggleBookmark(media: MediaData) {
  media.isBookmarked = !media.isBookmarked;
this.mediaDataService.bookmarkToggle(media).subscribe();
}

}
