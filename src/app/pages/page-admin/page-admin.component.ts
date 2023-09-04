import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent {
  storedToken: string | null;
  formulaire!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router // private formGroupe: FormGroup
  ) {
    this.storedToken = localStorage.getItem('token');
    this.formulaire = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login() {
    const loginForm = this.formulaire;
    const data = {
      "email": loginForm.get('email')?.value,
      "password": loginForm.get('password')?.value,
    };
    this.userService.login(data).subscribe((response) => {
      console.log('User connecté!' + response);
      console.log('token = ' + response.data);
      // Store the token in local storage
      localStorage.setItem('token', response.data);
    });
    this.router.navigate(['/home']);
  }

  signup() {
    if(this.formulaire.valid) {
    // const loginForm = this.formulaire;
    const data = {
      "email": this.formulaire.get('email')?.value,
      "password": this.formulaire.get('password')?.value,
    };
    this.userService.signup(data).subscribe((response) => {
      console.log('User ajouté!' + response);
      this.router.navigate(['/home']);
    });
  }else{
    alert("Formulaire invalide");
  }
}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}



