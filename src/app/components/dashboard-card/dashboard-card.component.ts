import { Component, input } from '@angular/core';
import { StatCard } from '../../models/dashboard.model';

@Component({ standalone: true, selector: 'app-dashboard-card', template: `<article class="card"><div class="icon" [class]="card().tone">{{ card().icon }}</div><strong>{{ card().value }}</strong><span>{{ card().label }}</span></article>`, styles: [`.card{background:#fff;border-radius:20px;padding:18px;min-height:145px;box-shadow:0 8px 24px #2530520d}.icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;font-weight:800;margin-bottom:16px}.icon.primary{background:#eef0ff;color:#5865f2}.icon.success{background:#e9faf2;color:#21b573}.icon.warning{background:#fff5e5;color:#f2a93b}.card strong{display:block;font-size:25px;margin-bottom:5px}.card span{color:#7d879b;font-size:13px}`] })
export class DashboardCardComponent { readonly card = input.required<StatCard>(); }
