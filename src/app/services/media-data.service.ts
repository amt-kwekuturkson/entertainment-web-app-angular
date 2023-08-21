import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { MediaData } from '../types/interface';

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {
private apiURL = ' http://localhost:5000/media'
  constructor(private http: HttpClient) { }

  getMedia(): Observable<MediaData[]> {
    return this.http.get<MediaData[]>(this.apiURL);
  }
  
  bookmarkToggle(media: MediaData): Observable<MediaData> {
    const url = `${this.apiURL}/${media.isBookmarked}`;
    return this.http.put<MediaData>(this.apiURL, media).pipe();
  }
}
