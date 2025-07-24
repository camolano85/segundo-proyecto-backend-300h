import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usuario: any = null; // ✅ Declarar la propiedad

  constructor(public authService: AuthService) {
    this.usuario = this.authService.obtenerUsuarioActual(); // ✅ Obtener del servicio
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    this.usuario = null;
  }
}





