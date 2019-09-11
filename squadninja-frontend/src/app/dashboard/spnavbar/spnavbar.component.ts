import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../spsidebar/spsidebar.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-spnavbar',
  templateUrl: './spnavbar.component.html',
  styleUrls: ['./spnavbar.component.scss']
})
export class SpnavbarComponent implements OnInit {

  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }
 

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);

  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
}
