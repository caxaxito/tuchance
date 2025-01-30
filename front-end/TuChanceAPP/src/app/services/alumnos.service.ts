import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private apiUrl = 'http://127.0.0.1:8000/api/'; // Ajusta la URL

  constructor(private http: HttpClient) {}

  // Obtener estudiantes por grado
  getAlumnosByGrade(grado: number): Observable<any> {
    return this.http.get(`${this.apiUrl}consultar-alumno/${grado}`);
  }

 
}
