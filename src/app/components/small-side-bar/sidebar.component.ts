import { Component, Input, OnInit } from '@angular/core';
import { SmallSidebarItemProps } from '@app/SmallSidebarItemProps';
import { LargeSidebarItemProps } from '@app/LargeSidebarItemProps';
import { MainIcons, SecondaryIcons, ExploreIcons} from '../data/home'

import { subscriptions, playlists } from '../data/sidebar'
import { LargeSidebarSectionProps } from '@app/LargeSidebarSectionProps';
import { SubscriptionsProp } from '@app/SubscriptionsProp';
import { PlaylistProps } from '@app/PlaylistProps';



@Component({
  selector: 'sidebar',
  template: `
    <aside class="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
      <small-sidebar-item *ngFor="let item of SmallIconsData" [SidebarItem]="item"></small-sidebar-item>
    </aside>
    <aside class="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-p px-2 lg:flex hidden">
      <large-sidebar-section [SideBarSections]="MainSection" [title]="''"></large-sidebar-section>
      <hr>
      <large-sidebar-section [SideBarSections]="SecondarySection" [title]="''" [playlists]="PlayLists"></large-sidebar-section>
      <hr>
      <large-sidebar-section [SideBarSubscriptionSection]="SubscriptionSectionIcons" [title]="'Subscriptions'"></large-sidebar-section>
      <hr>
      <large-sidebar-section [SideBarSections]="ExploreSection" [title]="'Explore'"></large-sidebar-section>
    </aside>
  `,
  styles: [
  ]
})


export class SidebarComponent implements OnInit {

  SmallIconsData: SmallSidebarItemProps[] = MainIcons;
  MainSectionIcons: LargeSidebarItemProps[] = MainIcons;
  SecondarySectionIcons: LargeSidebarItemProps[] = SecondaryIcons;
  SubscriptionSectionIcons: SubscriptionsProp[] = subscriptions;
  ExploreSectionIcons: LargeSidebarItemProps[] = ExploreIcons;
  PlayLists: PlaylistProps[] = playlists;


  ngOnInit(): void {
    this.SubscriptionSectionIcons;
  }

  MainSection: LargeSidebarSectionProps = {
    Children: this.MainSectionIcons,
    title: '',
    visibleItemCount: 3
  }; 
  SecondarySection: LargeSidebarSectionProps = {
    Children: this.SecondarySectionIcons,
    title: '',
    visibleItemCount: 5
  }; 

  ExploreSection: LargeSidebarSectionProps = {
    Children: this.ExploreSectionIcons,
    title: '',
    visibleItemCount: 10
  };

}
