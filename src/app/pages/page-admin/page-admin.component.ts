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
  storedToken: string | null;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private instanceUserService: UserService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.storedToken=localStorage.getItem('token');
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {
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
    this.router.navigate(['/home']);
  }

  signup(){
    const loginForm = this.loginForm;
    const data = {"email": loginForm.get('email')?.value,"password": loginForm.get('password')?.value};
    this.instanceUserService.signup(data).subscribe((response: any) => {
      console.log('User ajouté!'+response);      
    });
    this.router.navigate(['/home']);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}

