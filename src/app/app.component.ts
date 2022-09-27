import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public cls = '';

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any) {
    if (window.scrollY > 5) {
      this.cls = "stuck"
    } else {
      this.cls = ''
    }
  }
  
}
