import { Component } from '@angular/core';
import { categories } from './components/data/home';
import { videos } from './components/data/home';
import { VideoGridItemProps } from './VideoGridItemProps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeTube';
  categories: string[] = categories;
  VideoData: VideoGridItemProps[] = videos;
  selectedCategory: string = "";
  HamburgerActive: boolean = false;
  hamburgerClicked(isActive: boolean)
  {
    this.HamburgerActive = isActive;
    console.log(this.HamburgerActive);
  }
}
