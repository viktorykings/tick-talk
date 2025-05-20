import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
