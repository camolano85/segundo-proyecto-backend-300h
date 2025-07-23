import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm!: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required], // sin "ñ"
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { correo, password } = this.loginForm.value;

    this.authService.login({ correo, password }).subscribe({
      next: (respuesta) => {
        this.authService.guardarToken(respuesta.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
        this.error = 'Correo o contraseña incorrectos';
      },
    });
  }
}






