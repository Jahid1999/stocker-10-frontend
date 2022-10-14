import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prdeiction-graph',
  templateUrl: './prdeiction-graph.component.html',
  styleUrls: ['./prdeiction-graph.component.scss']
})
export class PrdeictionGraphComponent implements OnInit {
  public company_name: string = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.company_name = this.router.snapshot.params['company-name'];
  }

}
