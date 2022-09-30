import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technical-indicator-index',
  templateUrl: './technical-indicator-index.component.html',
  styleUrls: ['./technical-indicator-index.component.scss']
})
export class TechnicalIndicatorIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('called')
  }

}
