import { Component, OnInit, OnChanges } from '@angular/core';
import {AudioListService} from '../audio-list.service';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.scss']
})
export class AudioListComponent implements OnInit {
  music;
  constructor(private audioListService: AudioListService) { }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  searchSong(value) {
    this.audioListService.getMusicList(value).subscribe(music => {
      this.music = music;
    });
  }
}
