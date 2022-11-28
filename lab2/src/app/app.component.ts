import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab2';

  contents = ['first', 'second', 'third'];
  displayHeader: boolean = true;

  changeHeader() {
    this.displayHeader = !this.displayHeader;
  }
}
