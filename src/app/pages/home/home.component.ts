import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { MatTabsModule } from '@angular/material/tabs';
import { OverviewComponent } from './tabs/overview/overview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, MatTabsModule, OverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  icons = {
    faSearch,
    faUser,
  };
}
