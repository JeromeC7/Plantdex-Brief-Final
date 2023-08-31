import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private instanceUserService: UserService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      console.log("TOKEN présent dans localStorage");
    }else{
      console.log("TOKEN absent de localStorage");
    }

    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', Validators.required],
      password: ['', Validators.required], // Initialize with an empty string and add any validators you need
      });
  }

  login(){
    const loginForm = this.loginForm;
    const data = {"email": loginForm.get('email')?.value,"password": loginForm.get('password')?.value};
    this.instanceUserService.login(data).subscribe((response: any) => {
      console.log('User connecté!'+response);
      console.log("token = "+response.data);
      // Store the token in local storage
      localStorage.setItem('token', response.data);        
    });
  }
}

