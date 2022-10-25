import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-graph-index',
  templateUrl: './company-graph-index.component.html',
  styleUrls: ['./company-graph-index.component.scss'],
})
export class CompanyGraphIndexComponent implements OnInit {
  public company_name = '';
  public company_full_name = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.company_name = this.router.snapshot.params['company-name'];
    this.company_full_name = this.router.snapshot.params['company-full-name'];
    this.company_full_name = this.company_full_name.replace(/-/g, " ");
    // console.log(this.company_name)
  }
}
