import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  email : string = "";
  password : string = "";
  res : any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
}
Login() {

  this.http.post('http://localhost:3000/api/login', {
      email : this.email,
      password : this.password
      
    }).subscribe(response => {
       console.log('API response:', response);
       this.res = response;
       console.log(this.res.msg);

       if(this.res.msg === "Logged In!!"){
        localStorage.setItem('token', this.res.token);
        this.router.navigate(['/main-page']);
       }
       
    })
    
}

navigateToEmployeeDetails() {
  // Use the Angular Router to navigate to the login page
  // this.router.navigate(['/emp-details']);
}
}