import { Component,Input,OnInit } from '@angular/core';

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
ngOnInit(): void {
    
}
changeState() {
  this.bookmarkStatus = !this.bookmarkStatus;
  console.log(typeof this.bookmarkStatus);
}
}
