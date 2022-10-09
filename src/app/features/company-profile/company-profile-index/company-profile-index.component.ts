import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-profile-index',
  templateUrl: './company-profile-index.component.html',
  styleUrls: ['./company-profile-index.component.scss'],
})
export class CompanyProfileIndexComponent implements OnInit {
  public company_name: string = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.company_name = this.router.snapshot.params['company-name'];
  }
  navigateToGraphPage() {
    // console.log(this.company_name);
  }
}
