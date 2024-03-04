import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email : String = "";
  name : String = "";
  password : String = "";
constructor(private http: HttpClient, private router: Router){}

Register() {
  this.http.post('http://localhost:3000/api/signup', {
      name : this.name,
      email : this.email,
      password : this.password
      
    }).subscribe(response => {
       console.log('API response:', response);
       
      // this.loadData();
    })
    this.router.navigate(['/main-page']);
}

}
