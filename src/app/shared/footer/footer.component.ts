import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router'; // Füge dies hinzu

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private translate: TranslateService, private router: Router) { // Füge private router: Router hinzu
  }

  toggleLanguage() {
    this.translate.use(this.translate.currentLang === 'de' ? 'en' : 'de');
  }

  navigateToImprint() {
    const currentLang = this.translate.currentLang;
    this.router.navigate(['/imprint'], { queryParams: { lang: currentLang } });
    window.scrollTo(0, 0);
  }
}
