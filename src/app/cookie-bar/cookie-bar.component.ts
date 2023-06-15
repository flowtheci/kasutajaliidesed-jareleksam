import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-bar',
  templateUrl: './cookie-bar.component.html',
  styleUrls: ['./cookie-bar.component.scss']
})
export class CookieBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  destroyBanner() {
    // Destroy the current component and remove from view
    document.getElementById('cookie')!.remove();
  }

  isMobile() {
    return window.innerWidth < 768;
  }

}
