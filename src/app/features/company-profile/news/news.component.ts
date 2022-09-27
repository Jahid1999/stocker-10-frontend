import { Component, OnInit } from '@angular/core';
import { News } from './news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public allNews: News[] = []

  constructor() {
    this.allNews = [
      {
        title: 'Resumption after record date',
        body: 'Trading of the shares of the company will resume on 11.08.2022 after record date.',
        date: 'August 10, 2022'
      },
      {
        title: 'Suspension for Record date',
        body: 'Trading of the shares of the Company will remain suspended on record date i.e., 10.08.2022 for entitlement of interim dividend.',
        date: 'August 8, 2022'
      },
      {
        title: 'Resumption after record date',
        body: 'Trading of the shares of the company will resume on 11.08.2022 after record date.Trading of the shares of the company will resume on 11.08.2022 after record date.Trading of the shares of the company will resume on 11.08.2022 after record date.',
        date: 'August 10, 2022'
      },
    ]
  }

  ngOnInit(): void {
  }

}
