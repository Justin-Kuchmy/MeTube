import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  ngOnInit(): void {
    this.hamburgerActive = false;
  }
  @Input() HamburgerIsActive: boolean = false;
  showfullWidthSearch: boolean = false;
  hamburgerActive: boolean = false;
  @Output() HamburgerActive = new EventEmitter();
  toggleHamburger() {

    this.hamburgerActive = !this.hamburgerActive;
    this.HamburgerActive.emit(this.hamburgerActive)
    //console.log(this.hamburgerActive);
  }
  showAlert(buttonName: String) {
    alert(`${buttonName} button Clicked!`);
  }
  hideStuff() {
    this.showfullWidthSearch = !this.showfullWidthSearch;
  }
}
