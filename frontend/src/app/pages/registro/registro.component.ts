import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    correo: '',
    password: ''
  };

  registrarUsuario() {
    console.log('Usuario a registrar:', this.usuario);
    // Aquí puedes llamar a tu servicio authService para enviar al backend
  }
}


