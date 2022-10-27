import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-profile-index',
  templateUrl: './company-profile-index.component.html',
  styleUrls: ['./company-profile-index.component.scss'],
})
export class CompanyProfileIndexComponent implements OnInit {
  public company_name: string = '';

  constructor(private router: ActivatedRoute, private ACrouter: Router) {}

  ngOnInit(): void {
    this.company_name = this.router.snapshot.params['company-name'];
  }
  navigateToGraphPage() {
    // console.log(this.company_name);
    let fullname = this.router.snapshot.params['full-name'];
    this.ACrouter.navigateByUrl(
      `profile/${this.company_name}/${fullname}/graph`
    );
  }
}
