import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'signals';

  constructor(private router: Router){}

  goTo(link: string): void {
    this.router.navigate([link])
  }
}
