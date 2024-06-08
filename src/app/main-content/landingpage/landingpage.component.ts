import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  constructor(private translate: TranslateService) {
  }

  toggleLanguage() {
    console.log('toggleLanguage() called');
    this.translate.use(this.translate.currentLang === 'de' ? 'en' : 'de');
}
}
