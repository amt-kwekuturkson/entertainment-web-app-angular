import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-standard-card',
  templateUrl: './standard-card.component.html',
  styleUrls: ['./standard-card.component.css']
})
export class StandardCardComponent {
  @Input() bookmarkStatus?: boolean;
  @Input() mediaTitle?: string;
  @Input() mediaCategory?:string;
  @Input() yearOfRelease?:number;
  @Input() rating?: string;
  @Input() mediaImage?: string;

  changeState() {
    this.bookmarkStatus = !this.bookmarkStatus;
    console.log(typeof this.bookmarkStatus);
  }

}
