import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from '@angular/animations'

@Component({
  selector: 'app-inner-content',
  templateUrl: './inner-content.component.html',
  styleUrls: ['./inner-content.component.scss']
})
export class InnerContentComponent implements OnInit {

  @Input() itemWidth: number = 160;
  @Input() itemHeight: number = 100;
  @Input() itemsQuantity: number = 11;

  @Input() showControls = true;
  @Input() showSelectors = true;
  @Input() timing = '4000ms';


  currentSlide: number = 0;
  increment: number = 1;
  offset: number = 0;
  timeOutVariable: any = null;

  private animationPlayer: AnimationPlayer | any;
  @ViewChild('slider') private slider: ElementRef | any;
  @ViewChild('content') private content: ElementRef | any;
  @ViewChild('innerContent') private innerContent: ElementRef | any;

  constructor(private animationBuilder: AnimationBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.startAutoScrolling();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeOutVariable);
  }


  startAutoScrolling(){
    this.timeOutVariable = setTimeout(() => {
      this.transitionCarousel(null, this.currentSlide+this.increment);
    }, 0);
  }

  private transitionCarousel(time: any, slide: number) {

    if (slide>=2*this.itemsQuantity)
    {
      this.transitionCarousel(0,this.currentSlide-this.itemsQuantity);
      slide-=this.itemsQuantity;
    }

    const offset = this.offset - this.itemWidth * slide;
    const myAnimation: AnimationFactory = this.buildAnimation(offset, time);
    this.animationPlayer = myAnimation.create(this.slider.nativeElement);
    if (time != 0) {
      if (slide<this.itemsQuantity)
      {
        this.animationPlayer.onDone(() => {
          this.currentSlide = slide+this.itemsQuantity;
          this.transitionCarousel(0, this.currentSlide);
          this.transitionCarousel(null, this.currentSlide+this.increment);
        })
      }
      else{
        this.animationPlayer.onDone(()=>{
          this.currentSlide=slide;
          this.transitionCarousel(null, this.currentSlide+this.increment);
          // console.log('hello onDone');
        });
      }
    }
    this.animationPlayer.play();
  }

  private buildAnimation(offset: any, time: any) {
    return this.animationBuilder.build([
      animate(time == null ? this.timing : 0, style({ transform: `translateX(${offset}px)` }))
    ]);
  }

}
