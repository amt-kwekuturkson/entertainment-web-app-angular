import { Component,OnInit } from '@angular/core';
import { MediaData } from 'src/app/types/interface';
import { MediaDataService } from 'src/app/services/media-data.service';
import { mediaService } from 'src/app/services/media.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

normalFiles: MediaData[] = []

constructor(private mediaDataService: MediaDataService) {

}
  ngOnInit(): void {
    this.mediaDataService.getMedia()
}

}
