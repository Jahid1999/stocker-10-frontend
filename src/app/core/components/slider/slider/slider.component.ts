import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/core/services/slider.service';
import { Slider } from 'src/app/core/models/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public sliderData: any;
  public itemsQuantity: number = 0;
  public itemWidth: number = 190;
  public itemHeight: number = 100;

  public sliders: any = [];
  public loadSlider: boolean = false;
  

  constructor(private sliderService: SliderService) { }


  ngOnInit(): void {
    this.sliderData = this.sliderService.getSliderData();
    this.itemsQuantity = this.sliderData.length;
    this.addIconForTarde(this.sliderData);

    // this.sliderService.tempGetSliderData().subscribe((response)=>{
    //   if(response){
    //     this.dataProcessingForSlider(response);
    //     this.itemsQuantity = this.sliders.length;
    //     this.addIconForTarde(this.sliders);
    //     console.log(this.sliders);
    //   }
    // });
  }

  public dataProcessingForSlider(data: any){
    data.forEach((element: any, index: any)=>{
      let slider: Slider = new Slider();
      slider.price = element.ltp;
      slider.trade = element.ltp - element.ycp;
      slider.percentage = (element.ltp - element.ycp)/element.ycp;
      this.sliders.push(slider); 
    });
  }

  public addIconForTarde(sliderData: any){
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
    this.loadSlider = true;
  }

}
