import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed: any=false;

  title = 'angular-app';

  // onSliderValueChange(value: boolean) {
  //   this.sidebarCollapsed = value;

  // }

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
    //this.sliderValueChange.emit(this.isCollapsed);

  }
}
