import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private translate: TranslateService) {
  }

  toggleLanguage() {
    console.log('toggleLanguage() called');
    this.translate.use(this.translate.currentLang === 'de' ? 'en' : 'de');
}

  signPictures: string[] = [
    '/assets/img/html.svg',
    '/assets/img/css.svg',
    '/assets/img/javascript.svg',
    '/assets/img/git.svg',
    '/assets/img/api.svg',
    '/assets/img/typescript.svg',
    '/assets/img/angular.svg',
    '/assets/img/firebase.svg',
    '/assets/img/scrum.svg',
    '/assets/img/material-design.svg',
  ]

  signText: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Git',
    'API',
    'TypeScript',
    'Angular',
    'Firebase',
    'Scrum',
    'Material Design',
  ]
}
