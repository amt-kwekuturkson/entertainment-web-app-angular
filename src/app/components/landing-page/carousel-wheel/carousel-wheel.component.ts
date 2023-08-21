import { Component,OnInit } from '@angular/core';
import { MediaData } from 'src/app/types/interface';
import { MEDIA } from 'src/app/media';
import { mediaService } from '../../../services/media.service';
@Component({
  selector: 'carousel-wheel',
  templateUrl: './carousel-wheel.component.html',
  styleUrls: ['./carousel-wheel.component.css']
})
export class CarouselWheelComponent implements OnInit{
  
mediaFiles: MediaData[] = [];

constructor(private mediaService: mediaService){}

ngOnInit(): void {
this.mediaFiles = this.mediaService.getMedia();
}

}
