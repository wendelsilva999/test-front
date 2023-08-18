import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openInNewTab(route: string) {
    window.open(route, '_blank');
  }
  title = 'Angular';
}
