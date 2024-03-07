import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faBagShopping,
  faEye,
  faEyeSlash,
  faMoneyBillTransfer,
  faPiggyBank,
  faSackDollar,
} from '@fortawesome/free-solid-svg-icons';
import { LineBarComponent } from '../../../../components/charts/line-bar/line-bar.component';
import { LineBarContent } from '../../../../components/charts/line-bar/line-bar';

@Component({
  selector: 'fr-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FontAwesomeModule,
    MatProgressBarModule,
    LineBarComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  icons = {
    faTransfer: faMoneyBillTransfer,
    faPiggyBank,
    faEye,
    faEyeSlash,
    faSackDollar,
    faArrowUp,
    faArrowDown,
    faBagShopping,
  };

  contentDespesa: LineBarContent[] = [
    {
      label: "Spotify",
      value: 50
    },
    {
      label: "Netflix",
      value: 50
    },
    {
      label: "Faculdade",
      value: 30
    }
  ]

  mostraSaldo: boolean = false;

  saldoTotal: number = 64000;

  totalReceber = {
    total: 3125,
    comparativo: 100,
    percentual: 50.1,
  };

  totalPagar = {
    total: 1500,
    comparativo: 100,
    percentual: 12.5,
  };
}
