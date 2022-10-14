import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from './profile';
import { ProfileCardService } from './profile-card.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  public company_name: string = '';
  public profile: Profile | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ProfileCardService
  ) {}
  ngOnInit(): void {
    this.company_name = this.activatedRoute.snapshot.params['company-name'];
    this.service.getProfile(this.company_name).subscribe((response: any) => {
      this.profile = response;
    });
  }
  navigateToGraphPage() {
    // console.log(this.company_name);
    this.router.navigateByUrl(`company-profile/${this.company_name}/graph`);
  }
}
