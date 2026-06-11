import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Card } from '../../shared/components/card/card';

@Component({
  selector: 'app-dashboard',
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  stats = signal([
    { label: 'Total Income', value: '$0.00' },
    { label: 'Total Expenses', value: '$0.00' },
    { label: 'Balance', value: '$0.00' },
  ]);

  statCount = computed(() => this.stats().length);
}
