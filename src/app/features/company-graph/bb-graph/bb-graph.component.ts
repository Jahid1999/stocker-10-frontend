import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { bbData } from "./bb-graph-model";
import { BbGraphService } from "./bb-graph.service";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bb-graph',
  templateUrl: './bb-graph.component.html',
  styleUrls: ['./bb-graph.component.scss']
})
export class BbGraphComponent implements OnInit {
  chart:any;
  bbData: bbData[] | any ;
  dataPoints:any[] = [];
  companyCode:string = '';
  currentRoute: string = '';
  chartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    title:{
    text: "Bollinger Band Graph",
    },
    axisX: {
    valueFormatString: "DD/MM/Y"
    },
    axisY: {
    // title: "Price",
    // valueFormatString: "#0.##°F"
    },
    data: [{
      type: "rangeArea",
      xValueFormatString: "DD/MM/Y",
      // yValueFormatString: "#0.##°F",
      dataPoints: this.dataPoints
    }]}
  constructor(private service:BbGraphService,private router: Router) {
   // console.log(router.url);
    // router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
    //       .subscribe((event: { url: string; }) => 
    //        {
    //           this.currentRoute = event.url;          
    //           console.log(event);
    //        });
    
  }
  ngOnInit(): void {
    this.service.getCompanyNameCode("aamra networks limited").subscribe((res:any)=>{
       console.log(res)
       res.forEach((val: any) => {
        if (val.trading_code == "aamra networks limited") {
          console.log(val.scrip)
          this.companyCode =  val.scrip;
        }
      })
       this.service.recieveBbData(this.companyCode).subscribe(
        (response: any)=>{
          this.bbData = response ;
          let val:bbData|any;
          this.bbData.forEach((val:bbData[]|any) => {
            let arr  = []
            arr.push(val.BOLD,val.BOLU)
            let time = this.toDateTime(val.DateEpoch)
            this.dataPoints.push({x:time,y:arr});
          });
          this.chart.render();
      });
    })
   
    }
    getChartInstance(chart: object) {
      this.chart = chart;
    }
    toDateTime(secs: number) {
      const result = new Date(secs);
      return result;
    }
  }
     
