import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  isLoading: boolean = false;
  passwordMismatch: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  checkPasswordStrength(): void {
    // Password validation: 8+ characters, includes number and symbol
    const hasMinLength = this.password.length >= 8;
    const hasNumber = /\d/.test(this.password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    // You can add visual feedback here if needed
    console.log('Password strength:', { hasMinLength, hasNumber, hasSymbol });
  }

  checkPasswordMatch(): void {
    this.passwordMismatch = this.password !== this.confirmPassword && this.confirmPassword.length > 0;
  }

  isFormValid(): boolean {
    const hasMinLength = this.password.length >= 8;
    const hasNumber = /\d/.test(this.password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    const passwordsMatch = this.password === this.confirmPassword;

    return (
      this.fullName.trim() !== '' &&
      this.email.trim() !== '' &&
      hasMinLength &&
      hasNumber &&
      hasSymbol &&
      passwordsMatch
    );
  }

  onSignup(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.isLoading = true;
    // TODO: Implement signup logic
    console.log('Signup:', {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    });
    setTimeout(() => this.isLoading = false, 1000);
  }
}
