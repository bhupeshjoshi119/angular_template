import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardDetailsEcomComponent } from './components/card-details/card-details-ecom/card-details-ecom.component';
import { MetaQuestComponent } from './components/card-details/meta-quest/meta-quest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardDetailsEcomComponent, MetaQuestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecom';
  showMetaQuest = false;
  showEcom = false;
}
