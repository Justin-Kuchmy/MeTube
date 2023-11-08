import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SmallSidebarItemProps } from '@app/SmallSidebarItemProps';
import { LargeSidebarItemProps } from '@app/LargeSidebarItemProps';
import { MainIcons, SecondaryIcons, ExploreIcons } from '../data/home'

import { subscriptions, playlists } from '../data/sidebar'
import { LargeSidebarSectionProps } from '@app/LargeSidebarSectionProps';
import { SubscriptionsProp } from '@app/SubscriptionsProp';
import { PlaylistProps } from '@app/PlaylistProps';
import { HamburgerService } from '@app/hamburger.service';



@Component({
  selector: 'sidebar',
  template: `
  <div  *ngIf="HamburgerIsActive && (isSmallScreen || isInMobileMode)" class="fixed z-[100] inset-0 bg-secondary-dark opacity-50 pointer-events-none" (click)="toggleHamburger()">
  </div>
  <aside *ngIf="HamburgerIsActive" class="w-56 {{(!isSmallScreen && !isInMobileMode) ? ' ' : 'absolute'}} z-[999] top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-p px-4 py-2 flex bg-white">
    <div *ngIf="isSmallScreen || isInMobileMode" class="gap-4 items-center flex flex-shrink-0">
          <custom-button [variant]="'ghost'" [size]="'icon'" (click)="toggleHamburger()" [buttonProps]="{disabled: false}">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
          </custom-button>
          <a href="/">
              <img src="../../../assets/MeTubeLogo.png" alt="logo" class="h-6">
          </a>
      </div>
      <large-sidebar-section [SideBarSections]="this.MainSection" [title]="''"></large-sidebar-section>
      <hr>
      <large-sidebar-section [SideBarSections]="SecondarySection" [title]="''" [playlists]="PlayLists"></large-sidebar-section>
      <hr>
      <large-sidebar-section [SideBarSubscriptionSection]="SubscriptionSection" [title]="'Subscriptions'"></large-sidebar-section>
      <hr>
      <large-sidebar-section [SideBarSections]="ExploreSection" [title]="'Explore'"></large-sidebar-section>
    </aside>


    <aside *ngIf="!HamburgerIsActive && !isInMobileMode" class="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1">
      <small-sidebar-item class="" *ngFor="let item of SmallIconsData" [SidebarItem]="item"></small-sidebar-item>
    </aside>
  `,
  styles: [
  ]
})


export class SidebarComponent implements OnInit {


  constructor(private service: HamburgerService) { }
  @Input() HamburgerIsActive: boolean = false;
  @Output() HamburgerActive = new EventEmitter();
  isSmallScreen: boolean = false;
  isInMobileMode: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isInMobileMode = event.target.innerWidth <= 510;
    this.isSmallScreen = (event.target.innerWidth < 1025 && event.target.innerWidth > 510);
    console.log(this.isInMobileMode);
  }

  ngOnInit(): void {
    this.service.HamburgerIsActive$.subscribe((value) => {
      this.HamburgerIsActive = value;
    })
  }
  SmallIconsData: SmallSidebarItemProps[] = MainIcons;
  MainSectionIcons: LargeSidebarItemProps[] = MainIcons;
  SecondarySectionIcons: LargeSidebarItemProps[] = SecondaryIcons;
  SubscriptionSectionIcons: SubscriptionsProp[] = subscriptions;
  ExploreSectionIcons: LargeSidebarItemProps[] = ExploreIcons;
  PlayLists: PlaylistProps[] = playlists;

  toggleHamburger() {
    this.service.HamburgerIsActive$.subscribe((value) => {
      this.HamburgerIsActive = value;
    })
    this.HamburgerIsActive = !this.HamburgerIsActive;
    this.service.updateHamburgerIsActive(this.HamburgerIsActive);
  }


  combinedArray: any[] = [...this.SecondarySectionIcons, ...this.PlayLists];
  MainSection: LargeSidebarSectionProps = {
    Children: this.MainSectionIcons,
    title: 'main',
    visibleItemCount: 3
  };
  SecondarySection: LargeSidebarSectionProps = {
    Children: this.combinedArray,
    title: '',
    visibleItemCount: 4
  };

  SubscriptionSection: LargeSidebarSectionProps = {
    Children: this.SubscriptionSectionIcons,
    title: '',
    visibleItemCount: 5
  };
  ExploreSection: LargeSidebarSectionProps = {
    Children: this.ExploreSectionIcons,
    title: '',
    visibleItemCount: 5
  };

}
