import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SocialLinksComponent } from './social-links/social-links.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingpageComponent,SocialLinksComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
