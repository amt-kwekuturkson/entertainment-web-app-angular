import { Component } from '@angular/core';
import { MediaData } from 'src/app/types/interface';
import { MEDIA } from 'src/app/media';
@Component({
  selector: 'carousel-wheel',
  templateUrl: './carousel-wheel.component.html',
  styleUrls: ['./carousel-wheel.component.css']
})
export class CarouselWheelComponent {
  
mediaFiles: MediaData[] = MEDIA;  

}
