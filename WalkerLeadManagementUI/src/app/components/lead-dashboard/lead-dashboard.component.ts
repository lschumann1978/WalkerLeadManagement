import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LeadService } from '../../services/lead.service';
import { Lead } from '../../models/lead.model'; // Centralized model import

@Component({
  selector: 'app-lead-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lead-dashboard.component.html',
  styleUrls: ['./lead-dashboard.component.scss'],
})
export class LeadDashboardComponent implements OnInit {
  leads: Lead[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private leadService: LeadService, private router: Router) {}

  ngOnInit() {
    this.loadLeads();
  }

  loadLeads() {
    this.leadService.getLeads().subscribe({
      next: (data) => {
        this.leads = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching leads:', error);
        this.error = 'Failed to load leads.';
        this.loading = false;
      },
    });
  }

  viewLeadDetails(id: number) {
    this.router.navigate([`/lead/${id}`]);
  }
}
