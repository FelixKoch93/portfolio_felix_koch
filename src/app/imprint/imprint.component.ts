import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router'; // Füge dies hinzu

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  constructor(private translate: TranslateService, private route: ActivatedRoute) { // Füge private route: ActivatedRoute hinzu
    this.checkCurrentLanguage();
  }

  toggleLanguage() {
    this.translate.use(this.translate.currentLang === 'de' ? 'en' : 'de');
  }

  checkCurrentLanguage() {
    this.route.queryParams.subscribe(params => {
      const lang = params['lang'];
      if (lang) {
        this.translate.use(lang);
      } else {
        this.translate.use('de');
      }
    });
  }
}
