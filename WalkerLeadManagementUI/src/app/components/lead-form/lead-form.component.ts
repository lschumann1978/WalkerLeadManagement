import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss'],
})
export class LeadFormComponent {
  leadForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private leadService: LeadService
  ) {
    console.log('LeadFormComponent Loaded');
    this.leadForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      zipCode: ['', Validators.required],
      email: ['', [Validators.email]],
      isEmailPermitted: [false],
      isTextPermitted: [false],
    });
  }

  onSubmit() {
    if (this.leadForm.valid) {
      this.leadService.createLead(this.leadForm.value).subscribe({
        next: () => {
          alert('Lead added successfully!');
          this.router.navigate(['/']);
        },
        error: () => {
          alert('Failed to add lead. Check console for details.');
        }
      });
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
