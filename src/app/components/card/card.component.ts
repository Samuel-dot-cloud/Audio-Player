import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() music;
  // tslint:disable-next-line:new-parens
  player = new Audio;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  playSong(audio) {
    this.player.src = audio.previewUrl;
    this.player.play();
  }

  // tslint:disable-next-line:typedef
  stopSong(audio) {
    this.player.pause();
  }

}
