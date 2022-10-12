import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('main') main: any = null;
  public path: any;


  constructor(
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.path = this.location.path();
  }

}
