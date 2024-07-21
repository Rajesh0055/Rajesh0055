import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  isCollapsed: any=false;
  isLogin:any=false;
  showHeaderAndSidebar: boolean = true;

  title = 'angular-app';

  constructor(private router: Router,  private activeRoute: ActivatedRoute) {
    
  }


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide header and sidebar for login route
        this.showHeaderAndSidebar = this.router.url.includes('login-page');
      }
    });
  }

 
 
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
