import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialLinksComponent } from './social-links/social-links.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingpageComponent,SocialLinksComponent,
    AboutMeComponent,
     SkillsComponent,
     PortfolioComponent,
     ProjectsComponent,
    ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
