import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/core/services/slider.service';
import { Slider } from 'src/app/core/models/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public itemsQuantity: number = 0;
  public itemWidth: number = 190;
  public itemHeight: number = 100;

  public sliders: any = [];
  public isLoad: boolean = false

  constructor(private sliderService: SliderService) { }


  ngOnInit(): void {

    this.sliderService.getSliderData().subscribe((response)=>{
      if(response){
        this.dataProcessingForSlider(response);
        this.itemsQuantity = this.sliders.length;
        this.addIconForTrade(this.sliders);
        // console.log(this.sliders);
        this.isLoad = true;
      }
    });
  }


  public dataProcessingForSlider(data: any){
    data.forEach((element: any, index: any)=>{
      let slider: Slider = new Slider();
      slider.trading_code = element.trading_code;
      slider.price = element.ycp;
      slider.trade = element.difference;
      slider.percentage = element.percetage;
      this.sliders.push(slider);
    });
  }

  public addIconForTrade(sliderData: any){
    sliderData.forEach((element: any,index: any) => {
      if(element.trade < 0){
        element['icon'] = "fa fa-down-long";
        element['textColor'] = "text-danger";
        element['isFlat'] = false;
      }else if(element.trade == 0){
        element['icon'] = "fa fa-sort-alt";
        element['textColor'] = "text-primary";
        element['isFlat'] = true;
      }else{
        element['icon'] = "fa fa-up-long";
        element['textColor'] = "text-success";
        element['isFlat'] = false;
      }

    });

  }

}
