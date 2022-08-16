import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 showNav= true;
 otherScroll = window.pageYOffset;
 showLogo= false;

  x= fromEvent(document, 'scroll');

  constructor() {
    this.x.subscribe((res: any) => {
      console.log(res);
      const scroll = res.target.documentElement.scrollTop;
      console.log(scroll);


      if (scroll>1){
        this.showNav = false;
      }
      if (scroll< this.otherScroll){
        this.showNav = true;
        this.showLogo = true;
      }
      if (scroll<600){
        this.showLogo = false;
      }

      this.otherScroll = scroll;
    });
   }

  ngOnInit(): void {
  }

}
