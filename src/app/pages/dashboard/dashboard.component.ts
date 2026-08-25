import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';
import { StatCard, QuickAction } from '../../models/dashboard.model';

@Component({ standalone: true, imports: [CommonModule, DashboardCardComponent], templateUrl: './dashboard.component.html', styleUrl: './dashboard.component.css' })
export class DashboardComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly stats: StatCard[] = [
    { label: 'Tasks completed', value: '24', icon: '✓', tone: 'success' }, { label: 'Active projects', value: '08', icon: '▦', tone: 'primary' }, { label: 'Hours focused', value: '18.5', icon: '◷', tone: 'warning' }, { label: 'Team updates', value: '12', icon: '✉', tone: 'primary' }
  ];
  readonly actions: QuickAction[] = [{ label: 'New task', icon: '＋' }, { label: 'Projects', icon: '□' }, { label: 'Activity', icon: '◉' }];
  logout(): void { this.auth.logout(); this.router.navigate(['/login']); }
}
