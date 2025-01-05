import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadService } from '../../services/lead.service';
import { Lead } from '../../models/lead.model';

@Component({
  selector: 'app-lead-details',
  standalone: true,
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.scss'],
})
export class LeadDetailsComponent implements OnInit {
  lead: Lead | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadService: LeadService
  ) {}

  ngOnInit() {
    this.loadLead();
  }

  loadLead() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = parseInt(idParam, 10);
      this.fetchLeadById(id);
    } else {
      this.error = 'Invalid Lead ID';
      this.loading = false;
    }
  }

  fetchLeadById(id: number) {
    this.loading = true;

    this.leadService.getLeadById(id).subscribe({
      next: (data) => {
        console.log('Fetched Lead:', data);
        this.lead = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to fetch lead details:', error);
        this.error = error.status === 404 
          ? 'Lead not found' 
          : 'Failed to load lead details. Please try again later.';
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/']); // Navigate back to the dashboard
  }
}
