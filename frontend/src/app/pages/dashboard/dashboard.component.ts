import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  usuario: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuarioActual();
  }
}
