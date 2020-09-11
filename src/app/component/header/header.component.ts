import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUrl:string;
  constructor(private router: Router,private route: ActivatedRoute) {
    router.events.subscribe( (event) => 
    {if( event instanceof NavigationEnd ) {
      console.log(event.url)
      this.currentUrl=event.url;
    } })

   }
  
  ngOnInit() {
    this.currentUrl=this.router.url;
    this.route.params.subscribe(params => {
      // route info is stored in `params`
      console.log(params);
  });
  }

}
