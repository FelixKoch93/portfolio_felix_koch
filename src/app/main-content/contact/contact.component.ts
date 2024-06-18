import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router'; // Füge dies hinzu

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private translate: TranslateService, private router: Router) { // Füge private router: Router hinzu
  }

  toggleLanguage() {
    this.translate.use(this.translate.currentLang === 'de' ? 'en' : 'de');
  }

  navigateToPrivacyPolicy() {
    const currentLang = this.translate.currentLang;
    this.router.navigate(['/privacy-policy'], { queryParams: { lang: currentLang } });
    window.scrollTo(0, 0);
  }

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  }

  post = {
    endPoint: 'https://felixkoch-portfolio.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  divTouched = false;

  onCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.divTouched = !checkbox.checked;
  }

  onSubmit(ngForm: NgForm) {
    // Mark all fields as touched to trigger validation messages
    Object.keys(ngForm.controls).forEach(field => {
      const control = ngForm.control.get(field);
      control?.markAsTouched({ onlySelf: true });
    });

    if (this.contactData.privacy) {
      if (ngForm && ngForm.submitted && ngForm.form.valid) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } 
      this.divTouched = false;
    } else {
      this.divTouched = true;
    }
  }
}
