import { Component, ElementRef, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  buttonLabel: string | undefined;
  isMenuOpen: boolean = false;

  constructor(private translate: TranslateService,  private elementRef: ElementRef) {
    this.setButtonLabel();

    this.translate.onLangChange.subscribe(() => {
      this.setButtonLabel();
    });
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage() {
    console.log('toggleLanguage() called');
    this.translate.use(this.translate.currentLang === 'de' ? 'en' : 'de');
    this.setButtonLabel();
}

@HostListener('document:click', ['$event'])
clickOutside(event: MouseEvent) {
  if (!this.elementRef.nativeElement.contains(event.target)) {
    this.isMenuOpen = false;
  }
}

setButtonLabel() {
  this.buttonLabel = this.translate.currentLang === 'de' ? 'EN' : 'DE';
}

toggleMobileMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

closeMenu() {
  this.isMenuOpen = false;
}


}
