import { Component, Input, OnInit } from '@angular/core';
import { LargeSidebarItemProps } from "../../LargeSidebarItemProps";
import { LargeSidebarSectionProps } from '@app/LargeSidebarSectionProps';
import { SubscriptionsProp } from '@app/SubscriptionsProp';
import { Icons, LooseObject } from '../data/Icons'
import { PlaylistProps } from '@app/PlaylistProps';

@Component({
  selector: 'large-sidebar-section',
  template: `
    <h1 class="">{{title}}</h1>
    <div *ngIf="title !== 'Subscriptions'">
      <large-sidebar-item *ngFor="let item of SideBarSections.Children let i = index" 
      [SideBarSectionTitle]="SideBarSections.Children[i].title" 
      [IconOrImgUrl]="item.Icon" 
      [title]="item.title" 
      [url]="item.url">
      </large-sidebar-item>
      <large-sidebar-item *ngFor="let list of playlists let i = index" 
      [SideBarSectionTitle]="SideBarSections.Children[i].title" 
      [IconOrImgUrl]="'PlayList'" 
      [title]="list.name">
      </large-sidebar-item>
      </div>
      <!-- <div>
        <large-sidebar-item
        [IconOrImgUrl]="ButtonIcon" 
        [title]="ShowOrHideString" 
        (click)="this.isExpanded?  HideItems() :  ShowItems()"
        ></large-sidebar-item>
      </div> -->
    

    <div *ngIf="title === 'Subscriptions'">
      <large-sidebar-item  *ngFor="let item of SideBarSubscriptionSection" 
      [SideBarSectionTitle]="'Subscription'" 
      [title]="item.channelName" 
      [IconOrImgUrl]="item.imgUrl" 
      [url]="''">
      </large-sidebar-item>
    </div>
    
  `,
  styles: [
  ]
})
export class LargeSidebarSectionComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.SideBarSections.Children);
    console.log(this.playlists);
  }
  constructor()
  {

  }
  CombinedArray: any[] = [];
  @Input() title: string = "";
  @Input() SideBarSections: LargeSidebarSectionProps = {
    Children: [],
  }
  @Input() SideBarSubscriptionSection!: SubscriptionsProp[];
  @Input() playlists: PlaylistProps[] = [];
  icons: LooseObject = Icons;
  // isExpanded: boolean = false;
  // ButtonIcon: string = (this.isExpanded) ? 'Angleup' : 'Angledown';
  // ShowOrHideString: string = (this.isExpanded) ? 'Hide' : 'Show More';
  // tempSectionSize: number = 0;


  // ShowItems(): void{
  //   this.tempSectionSize = this.SideBarSections.visibleItemCount as number;
  //   this.SideBarSections.visibleItemCount = Number.POSITIVE_INFINITY;
  //   this.isExpanded = true;
  //   this.ButtonIcon = 'Angleup';
  //   this.ShowOrHideString = "Hide"
  // }
  // HideItems(): void{
  //   this.SideBarSections.visibleItemCount = this.tempSectionSize;
  //   this.isExpanded = false;
  //   this.ButtonIcon = 'Angledown';
  //   this.ShowOrHideString = "Show More";
  // }
}
