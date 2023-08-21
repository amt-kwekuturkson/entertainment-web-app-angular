import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MediaData } from '../types/interface';
import { MEDIA } from '../media';
@Injectable({
  providedIn: 'root'
})
export class mediaService {

  constructor(){}

  getMedia(): Observable<MediaData[]> {
    const medias = of(MEDIA);
    return medias;
  }
}
