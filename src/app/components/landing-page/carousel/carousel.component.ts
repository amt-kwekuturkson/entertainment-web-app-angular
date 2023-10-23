import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { MediaData } from 'src/app/types/interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
@Input() bookmarkStatus?: boolean;
@Input() mediaTitle?: string;
@Input() mediaCategory?:string;
@Input() yearOfRelease?:number;
@Input() rating?: string;
@Input() mediaImage?: string;
@Input() media: MediaData | undefined;

@Output() onToggleBookmark: EventEmitter<MediaData> = new EventEmitter();

constructor() {}
ngOnInit(): void { 
}

onChangeState(media: MediaData | undefined) {
  this.onToggleBookmark.emit(media);
}
}
