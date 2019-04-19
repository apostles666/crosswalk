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
isJump=false;
isDoubleJump = false;
  constructor() { 
    var time = 500;
    document.addEventListener ("keydown", event => {
      console.log(event);
      //added "w" button steering (keycode: 87)
      if ((event.keyCode === 38 || event.keyCode === 87) && (this.isJump===false || this.isDoubleJump===false))
      {
        this.bottom=50;
        console.log(this.bottom);
        if(!this.isDoubleJump && this.isJump===true){
          {this.isDoubleJump=true;
            this.bottom=this.bottom+25;
          time=time+500;
          }
        }
        this.isJump = true;
        setTimeout(() => {
          this.bottom=0;
          time=500;       
          this.isDoubleJump = false;
          this.isJump = false; 
        }, time);

      }

    });
  }


  ngOnInit() {
  }

}
