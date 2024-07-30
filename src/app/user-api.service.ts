import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private apiUrl = 'https://localhost:7065/api/User'; // Replace with your API URL

  constructor(public http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postData(userName:any,firstName:any,lastName:any,emailId:any,phoneNo:any,address:any,createdOn:any,status:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    var d={
      "id": 0,
      "userName": userName,
      "firstName":firstName,
      "lastName":lastName,
      "emailId":emailId,
      "phoneNo":phoneNo,
      "address":address,
      "createdOn":createdOn,
      "status":status
    }
    return this.http.post<any>(`${this.apiUrl}/Create-User`, d, { headers });
 
}
}
