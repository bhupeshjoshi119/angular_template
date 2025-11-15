import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    this.isLoading = true;
    // TODO: Implement login logic
    console.log('Login:', { email: this.email, password: this.password });
    setTimeout(() => this.isLoading = false, 1000);
  }

  onGoogleLogin(): void {
    // TODO: Implement Google login
    console.log('Google login');
  }

  onAppleLogin(): void {
    // TODO: Implement Apple login
    console.log('Apple login');
  }
}
