import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/core/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public sliderData: any;
  public itemsQuantity: number = 11;
  public itemWidth: number = 160;
  public itemHeight: number = 100;

  constructor(private sliderService: SliderService) { }

  

  ngOnInit(): void {
    this.sliderData = this.sliderService.getSliderData();
    this.itemsQuantity = this.sliderData.length;
    // console.log(this.itemsQuantity);
    this.addIconForTarde();
  }

  public addIconForTarde(){
    this.sliderData.forEach((element: any,index: any) => {
      console.log(typeof element.trade);
      if(element.trade < 0){
        element['icon'] = "fa fa-arrow-down";
        element['textColor'] = "text-danger";
      }else if(element.trade == 0){
        element['icon'] = "";
        element['textColor'] = "text-primary";
      }else{
        element['icon'] = "fa fa-arrow-up";
        element['textColor'] = "text-success";
      }
      
    });
  }

}
