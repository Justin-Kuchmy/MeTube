import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { HamburgerService } from '@app/hamburger.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  constructor(private service: HamburgerService) { }
  @Input() HamburgerIsActive: boolean = false;
  showfullWidthSearch: boolean = false;
  hamburgerActive: boolean = false;
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef
  isInMobileMode!: boolean;
  DotIconClicked: boolean = false;
  @Output() ThreeDotsClicked = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isInMobileMode = event.target.innerWidth <= 510;

  }

  ngOnInit(): void {
    this.isInMobileMode = this.containerRef.nativeElement.offsetWidth <= 450;
    this.service.HamburgerIsActive$.subscribe((value) => {
      this.HamburgerIsActive = value;
    })
  }
  toggleThreeDotsMenu() {
    this.DotIconClicked = !this.DotIconClicked;
    this.ThreeDotsClicked.emit();

  }
  toggleHamburger() {
    this.service.HamburgerIsActive$.subscribe((value) => {
      this.HamburgerIsActive = value;
    })
    this.HamburgerIsActive = !this.HamburgerIsActive;
    this.service.updateHamburgerIsActive(this.HamburgerIsActive);
  }
  showAlert(buttonName: String) {
    alert(`${buttonName} button Clicked!`);
  }
  hideStuff() {
    this.showfullWidthSearch = !this.showfullWidthSearch;
  }
}
