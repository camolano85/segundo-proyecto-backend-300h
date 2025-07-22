import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { correo, contraseña } = this.loginForm.value;

    this.authService.login({ correo, contraseña }).subscribe({
      next: (response) => {
        this.authService.guardarToken(response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Error en login:', err);
        this.error = 'Credenciales inválidas o error del servidor.';
      },
    });
  }
}




