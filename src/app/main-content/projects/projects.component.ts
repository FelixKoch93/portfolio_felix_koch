import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('container') containerElements!: QueryList<ElementRef>;

  constructor(private translate: TranslateService) {
  }

  toggleLanguage() {
    this.translate.use(this.translate.currentLang === 'de' ? 'en' : 'de');
}

  projects = [
    {
      imageSrc: '/assets/img/join.svg',
      textContent: 'JavaScript | HTML | CSS | Firebase',
      name: 'Join',
      description: `JOIN.JoinDescription`,
      link: 'https://felixkoch-portfolio.de/join.felixkoch-portfolio.de/summary.html?msg=successfully_logged_in_as_guest',
      gitHubLink:'https://github.com/FelixKoch93/Join'
    },
    {
      imageSrc: '/assets/img/epl.svg',
      textContent: 'JavaScript | HTML | CSS',
      name: 'El Pollo Loco',
      description: `EPL.EPLDescription`,
      link: 'https://felixkoch-portfolio.de/epl.felixkoch-portfolio.de/index.html',
      gitHubLink:'https://github.com/FelixKoch93/El-Pollo-Loco'
    },
    {
      imageSrc: '/assets/img/pokedex.svg',
      textContent: 'JavaScript | HTML | CSS | API',
      name: 'Pokedex',
      description: `POKEDEX.PokedexDescription`,
      link: 'https://felixkoch-portfolio.de/pokedex.felixkoch-portfolio.de/index.html',
      gitHubLink:'https://github.com/FelixKoch93/Pokedex'
    }
  ];


  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    this.containerElements.forEach(container => {
      observer.observe(container.nativeElement);
    });
}

}
