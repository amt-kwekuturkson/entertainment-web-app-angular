import { Component, OnInit } from '@angular/core';
import { MediaData } from 'src/app/types/interface';
import { MediaDataService } from 'src/app/services/media-data.service';
@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.css']
})
export class BookmarkedComponent implements OnInit{

  mediaFiles: MediaData[] = []
  normalFiles: MediaData[] | undefined;
 

  constructor(private mediaDataService: MediaDataService){}

  ngOnInit(): void {

    this.mediaDataService.getMedia().subscribe((media) =>{this.mediaFiles = media
      
      this.normalFiles = this.mediaFiles.filter(x => x.isBookmarked === true );
    });

    
    }

 

  // ngOnInit(): void {
  //   this.mediaDataService.getMedia().subscribe((media)=> {
  //     this.mediaFiles = media
  //     this.normalFiles = this.mediaFiles.filter(x => x.isBookmarked === true)
  //   })
  // }

  
}
