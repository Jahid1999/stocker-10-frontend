import { Component, OnInit } from '@angular/core';
import { DataCompare } from '../category-compare/data.model';
import { GainerLooser } from '../gainer-looser/gainer-looser';
import { TodayData } from '../today-data/Today-data-bar-model';
import { BarGraphService } from './bar-graph.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent implements OnInit {
  public gainer_looser_data_list: GainerLooser[] = [];
  public todays_data_list: TodayData[] = [];
  public data_compare_list: DataCompare[] = [];

  constructor(private service: BarGraphService) {}

  ngOnInit(): void {
    // console.log("ssssssssssssss");
    this.service.getGainerLooser().subscribe((response: any) => {
      this.gainer_looser_data_list = response;
      // console.log( this.gainer_looser_data_list.length + "========================================" + this.gainer_looser_data_list[0].Category)
    });

    this.service.getTodaysData().subscribe((response: any) => {
      this.todays_data_list = response;
    });

    this.service.getCompareData().subscribe((response: any) => {
      this.data_compare_list = response;
    });
  }
}
