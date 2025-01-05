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
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
        ]
      ],
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
          if (!this.leadForm.value.isEmailPermitted && !this.leadForm.value.isTextPermitted) {
            alert('Lead added successfully!');
          }

          if (this.leadForm.value.isTextPermitted) {
            alert(`Lead added successfully! An text will be sent to the lead with the phone number provided.`);
          } else if (this.leadForm.value.isEmailPermitted) { 
            alert(`Lead added successfully! An email will be sent to the lead with the address provided.`);
          }

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

  formatPhoneNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    let digits = input.value.replace(/\D/g, '');
  
    // Limit to 10 digits
    digits = digits.substring(0, 10);
  
    // Format the digits
    if (digits.length <= 3) {
      this.leadForm.patchValue({ phoneNumber: `(${digits}` });
    } else if (digits.length <= 6) {
      this.leadForm.patchValue({ phoneNumber: `(${digits.substring(0, 3)}) ${digits.substring(3)}` });
    } else {
      this.leadForm.patchValue({
        phoneNumber: `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6)}`
      });
    }
    
    // Update the input value directly
    input.value = this.leadForm.value.phoneNumber;
  }
  

  isPhoneNumberInvalid(): boolean {
    const control = this.leadForm.get('phoneNumber');
    return control?.invalid && control?.touched || false;
  }
}
