import { Component, OnInit } from '@angular/core';
import { on } from 'cluster';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  bottom = 0;

  constructor() { 
    document.addEventListener ("keydown", event => {
      console.log(event);
      if (event.keyCode === 38)
      {
        this.bottom=128;
        console.log(this.bottom);
        setTimeout(() => {
          this.bottom=0;        
        }, 500);
      }

    });
  }


  ngOnInit() {
  }

}
