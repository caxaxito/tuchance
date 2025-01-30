import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  alumnos: any[] = [];
  grados: number[] = [1, 2, 3, 4, 5];
  gradoSeleccionado: number = 1;

  constructor(private alumnoService: AlumnosService) {}

  onNumberChange() {
    console.log('Número seleccionado:', this.gradoSeleccionado);
  }

  ngOnInit() {
    this.getAlumnos(1);
  }

  getAlumnos(grado: number) {
    this.alumnoService.getAlumnosByGrade(grado).subscribe(data => {
      this.alumnos = data;
    });
  }

}
