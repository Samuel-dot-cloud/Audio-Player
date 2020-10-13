import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AudioList, Song } from './audio-list/audio-list';
import { publishReplay, refCount } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AudioListService {
  iTunesUrl = 'https://itunes.apple.com/search';
  musicList: Observable<AudioList[]>;

  constructor(private httpClient: HttpClient) { }

  getMusicList(queryString): Observable<AudioList[]> {

    if (!this.musicList) {
      this.musicList = this.httpClient.get<AudioList[]>(`${this.iTunesUrl}?term=${queryString}`).pipe(
        publishReplay(1),
        refCount()
      );
    }
    return this.musicList;

}

// tslint:disable-next-line:typedef
clearCache() {
  this.musicList = null;
}
}
