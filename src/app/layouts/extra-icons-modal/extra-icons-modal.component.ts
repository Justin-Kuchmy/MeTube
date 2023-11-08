import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'extra-icons-modal',
  template: `
    <div class="w-[200px] border border-1 border-black">
            <div class="sticky absolute bottom-0 z-[999] grid grid-cols-2 bg-white p-4 m-1">
              <div class="bg-white hover:bg-gray-200 mr-1 mb-1 "(click)="showAlert('Upload')">
                <!-- Upload Icon -->
                <custom-button [variant]="'ghost'" [size]="'icon'" >
                      <!-- https://flowbite.com/icons/ -->
                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 12V1m0 0L4 5m4-4 4 4m3 5v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
                  </svg>
                </custom-button>
                <label for="Upload">Upload</label>
              </div>

                
                
                <div class="bg-white hover:bg-gray-200 mb-1" (click)="showAlert('Notification')">
                <!-- notifications Icon -->
                  <custom-button [variant]="'ghost'" [size]="'icon'" >
                    <!-- https://flowbite.com/icons/ -->
                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z" />
                      </svg>
                  </custom-button>
                  <label for="notifications">Notifications</label>
                </div>

                    
                    
                <div class="bg-white hover:bg-gray-200 mr-1" (click)="showAlert('Profile')">
                    <!-- Profile Icon -->
                  <custom-button [variant]="'ghost'" [size]="'icon'" >
                      <!-- https://flowbite.com/icons/ -->
                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z" />
                  </svg>
                  </custom-button>
                  <label for="Profile">Profile</label>
                </div>
            </div>
        </div>
  `,
  styles: [
  ]
})
export class ExtraIconsModalComponent {
  @Output() ThreeDotsClicked = new EventEmitter();

  showAlert(buttonName: String) {
    alert(`${buttonName} button Clicked!`);
  }

}
