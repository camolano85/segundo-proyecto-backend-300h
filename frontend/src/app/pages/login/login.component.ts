import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const credenciales = this.loginForm.getRawValue() as { correo: string; password: string };

    this.authService.login(credenciales).subscribe({
      next: (respuesta) => {
        const token = respuesta.token;
        this.authService.guardarToken(token);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error(error);
        this.error = 'Credenciales inválidas o error del servidor.';
      }
    });
  }
}





