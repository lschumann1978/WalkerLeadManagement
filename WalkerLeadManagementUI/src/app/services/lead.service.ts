import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from '../models/lead.model'; // Adjust path if needed

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiUrl = 'http://localhost:5010/api/Lead';

  constructor(private http: HttpClient) {}

  // Fetch all leads
  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>(this.apiUrl);
  }

  // Add a new lead
  createLead(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.apiUrl, lead);
  }

  // Fetch a single lead by ID
  getLeadById(id: number): Observable<Lead> {
    return this.http.get<Lead>(`${this.apiUrl}/${id}`);
  }
}
