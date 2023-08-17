import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent {
@Input() mediaTitle?:string;
@Input() mediaType?:string;
@Input() yearOfRelease?:string;
@Input() rating?:string;
}
