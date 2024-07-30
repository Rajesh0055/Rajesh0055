import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  data: any;
  totalUsers:any;
  dataForm: any;
  constructor(private apiService:UserApiService){}

  openmodel(){
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null){
      modelDiv.style.display = 'block';
    }
  }
  closemodel(){
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null){
      modelDiv.style.display = 'none';
    }
  }



  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
        this.totalUsers=this.data.length;
        console.log(this.data);
      }
    );

    this.dataForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      createdOn: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  
  }

  onSubmit() {

    if (this.dataForm.valid) {
      var id = this.dataForm.get("id").value;
      var userName = this.dataForm.get("userName").value;
      var firstName = this.dataForm.get("firstName").value;
      var lastName = this.dataForm.get("lastName").value;
      var emailId = this.dataForm.get("emailId").value;
      var phoneNo = this.dataForm.get("phoneNo").value;
      var address = this.dataForm.get("address").value;
      var createdOn = this.dataForm.get("createdOn").value;
      var status = this.dataForm.get("status").value;
      
      this.apiService.postData(userName,firstName,lastName,emailId,phoneNo,address,createdOn,status ).subscribe(
        response => {
          if(response.id>0)
            {
              alert("user created successfully");
            }
            else{
              alert("Error");
            }
        }
      );
      }
      
  }
  }


