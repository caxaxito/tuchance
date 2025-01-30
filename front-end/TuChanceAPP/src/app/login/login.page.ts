import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  ngOnInit(): void {
    
  }

  loginData = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log('Datos de inicio de sesión:', this.loginData);
    this.login();

  }

  login() {
    

    this.http.post<any>('http://127.0.0.1:8000/api/obtener/token/', this.loginData)
      .subscribe(response => {
        localStorage.setItem('auth_token', response.token);  // Guardar token en localStorage
        console.log('Token recibido:', response.token);
        this.router.navigate(['/tabs']);  // Redirigir a la página de Tabs
      }, error => {
        console.error('Error al iniciar sesión:', error);
        
      });
  }

}
