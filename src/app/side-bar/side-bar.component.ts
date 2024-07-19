import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Component, EventEmitter, Output } from '@angular/core';

import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule,DashboardPageComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})

export class SideBarComponent {
  isCollapsed :any= false;
  @Output() sliderValueChange = new EventEmitter<boolean>();
  toggleSidebar():void {

    this.isCollapsed = !this.isCollapsed;
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      if (this.isCollapsed) {
        sidebar.classList.add('collapsed');
      } else {
        sidebar.classList.remove('collapsed');
      }
    }
    this.sliderValueChange.emit(this.isCollapsed);

  }

  }
