import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MediaData } from '../types/interface';
import { MEDIA } from '../media';
@Injectable({
  providedIn: 'root'
})
export class mediaService {

  constructor(){}

  getMedia(): MediaData[] {
    return MEDIA;
  }
}
