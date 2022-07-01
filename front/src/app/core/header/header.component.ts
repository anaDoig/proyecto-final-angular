import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeHome : boolean = false;

  constructor(private router: Router) {

    this.router.events.forEach((event: any) => {
      if (event instanceof NavigationEnd) {
          if(event.url === '/' || event.url.includes('/#')) {
            this.activeHome = true;
          } else {
            this.activeHome = false;
          }
      }
    });

  }

  ngOnInit(): void {
  }

}
