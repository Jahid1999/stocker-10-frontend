import { Component, OnInit } from '@angular/core';
import { HealthIndicatorModel } from '../../models/HealthIndicatorModel';
import { HealthSliderService } from '../../services/health-slider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health-slider',
  templateUrl: './health-slider.component.html',
  styleUrls: ['./health-slider.component.scss'],
})
export class HealthSliderComponent implements OnInit {
  public itemsQuantity: number = 0;
  public itemWidth: number = 150;
  public itemHeight: number = 100;

  public healthIndicatorSliders: any = [];
  public company_code: any;

  public isLoad: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private healthSliderService: HealthSliderService
  ) {}

  ngOnInit(): void {
    this.company_code = this.route.snapshot.paramMap.get('company-name');
    this.healthSliderService.getHealthSliderData(this.company_code).subscribe({
      next: (response: any) => {
        if (response) {
          // console.log(response);
          this.dataProcessingForSlider(response);
          this.itemsQuantity = this.healthIndicatorSliders.length;
          this.isLoad = true;
        }
      },
      error: (error: any) => {
        console.log(error.message);
      },
    });
  }

  public dataProcessingForSlider(data: any) {
    for (let key in data) {
      let healthSlider: HealthIndicatorModel = new HealthIndicatorModel();
      healthSlider.name =
        this.healthSliderService.getHealthIndicatorAbbreviation(key);
      healthSlider.value = data[key];
      this.healthIndicatorSliders.push(healthSlider);
      this.isLoad = true;
    }
  }
}
