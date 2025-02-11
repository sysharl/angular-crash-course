import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  showError = false;
  user = {
    email: '',
    firstName: '',
    lastName: '',
  };

  submit(loginForm: NgForm) {
    if (!loginForm.value.firstName) {
      this.showError = true;
    } else {
      this.showError = false;
    }
    console.log(loginForm.value);
  }
}
