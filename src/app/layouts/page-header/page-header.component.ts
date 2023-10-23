import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  showfullWidthSearch: boolean = false;
  showAlert(buttonName: String) {
    alert(`${buttonName} button Clicked!`);
  }
  hideStuff() {
    this.showfullWidthSearch = !this.showfullWidthSearch;
  }
}
