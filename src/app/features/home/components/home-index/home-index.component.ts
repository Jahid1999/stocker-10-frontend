import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {
  title = 'Stocker-10-Frontend';
  state=0;
  today=true;
  compare:boolean|any;
  gain:boolean|any;
  setState(x:number,s:string){
    this.state = x;
    if(s=='today')
    {
      this.today = true;
      this.compare = false;
      this.gain = false;
    }
    else if(s=='compare'){
      this.compare = true;
      this.today = false;
      this.gain = false;

    }
    else{
      this.gain = true;
      this.today = false;
      this.compare = false;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
