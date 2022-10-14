import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from './news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  company_code:string = ''
  public allNews: News[] = []

  constructor(private service:NewsService, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.company_code = this.activatedRoute.snapshot.params['company-name'];
    this.service.getNewsData(this.company_code).subscribe((res:any)=>{
      this.allNews = res['news'];
    })
  }

}
