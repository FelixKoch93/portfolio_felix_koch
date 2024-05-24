import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

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
