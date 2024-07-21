import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  data: any;
  constructor(private apiService:UserApiService){}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      }
    );
  
  }

}
