import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
@Input() bookmarkStatus?: boolean = true;

ngOnInit(): void {
    
}
changeState() {
  this.bookmarkStatus = !this.bookmarkStatus;
  console.log('clicked');
}
}
