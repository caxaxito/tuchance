
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  alumno = {
    nombre: '',
    fecha_nacimiento: '',
    nombredelpadre: '',
    nombredelamadre: '',
    grado: 1,
    seccion: 'B',
    fechaingreso: '',
  };

  grados: number[] = [1, 2, 3, 4, 5];

  constructor(private http: HttpClient) {}

  submitForm() {
    console.log('Datos del Alumno:', this.alumno);
    const token = localStorage.getItem('auth_token');  // Obtener token guardado
    if (!token) {
      console.error('No hay token de autenticación');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`,  // Enviar token en el header
      'Content-Type': 'application/json'
    });

    this.http.post('http://127.0.0.1:8000/api/crear-alumno/', this.alumno)
      .subscribe(response => {
        console.log('Alumno creado:', response);
      }, error => {
        console.error('Error al crear el alumno:', error);
      });
  }
  

 

}
