import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Comprobar credenciales simples
    if (this.email === 'test@example.com' && this.password === 'admin') {
      // Redirigir a la pantalla de inicio
      this.router.navigate(['/home']);
    } else {
      // Mostrar mensaje de error
      this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
  }
}
