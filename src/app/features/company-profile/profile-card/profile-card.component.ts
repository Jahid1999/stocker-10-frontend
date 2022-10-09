import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  public company_name: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.company_name = this.activatedRoute.snapshot.params['company-name'];
  }
  navigateToGraphPage() {
    // console.log(this.company_name);
    this.router.navigateByUrl(`company-profile/${this.company_name}/graph`);
  }
}
