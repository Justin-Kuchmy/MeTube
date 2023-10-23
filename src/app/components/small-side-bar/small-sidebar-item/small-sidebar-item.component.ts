import { Component, Input, OnInit } from '@angular/core';
import { SmallSidebarItemProps } from '@app/SmallSidebarItemProps';
import { Icons, LooseObject } from '../../data/Icons'


@Component({
  selector: 'small-sidebar-item',
  template: `
    <div>
      <custom-button [variant]="'ghost'" class="py-2 px-1 flex flex-col items-center rouned-lg gap-1 w-full">
      <div [innerHTML]="icons[SidebarItem.Icon] | safeHtml"></div>
      <div [innerHtml]="SidebarItem.title | safeHtml"></div>
      </custom-button>
    </div>
  `,
  styles: [
  ]
})
export class SmallSidebarItemComponent{
  @Input() SidebarItem: SmallSidebarItemProps = {
    Icon: '',
    title: '',
    url: ''
  }
  icons: LooseObject = Icons;
 


}
