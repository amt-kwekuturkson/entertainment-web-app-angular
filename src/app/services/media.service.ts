import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MediaData } from '../types/interface';

export class mediaService {
    private mediaURL = '';
  private _autoReflesh$: Subject<void> = new Subject<void>();
  constructor(private http: HttpClient) {}
  get getReflesh$() {
    return this._autoReflesh$;
  }

  getMedia() {
    return this.http.get<MediaData>(this.mediaURL);
  }
}
