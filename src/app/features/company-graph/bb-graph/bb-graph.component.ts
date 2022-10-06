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
  currentRoute: string = ' ';
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
    let text = router.url;
    let str = '';
    const myArray = text.split("/");
    console.log(myArray)
    // let arr = myArray[2].split("%20")
    // for (let x of arr){
    //   str= str+x+' ';
    // }
    this.companyCode = myArray[2];
    // this.companyCode = this.companyCode.slice(0,-1)
  }
  ngOnInit(): void {
    // this.service.getCompanyNameCode().subscribe((res:any)=>{
    //    res.forEach((val: any) => {
    //     if (val.trading_code == this.companyCode) {
    //       this.companyCode =  val.scrip;
    //     }
    //   })
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
    // })
   
    }
    getChartInstance(chart: object) {
      this.chart = chart;
    }
    toDateTime(secs: number) {
      const result = new Date(secs);
      return result;
    }
  }
     
