import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private translate: TranslateService) {
  }

  toggleLanguage() {
    console.log('toggleLanguage() called');
    this.translate.use(this.translate.currentLang === 'de' ? 'en' : 'de');
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


  
  onSubmit(ngForm: NgForm) {
    
    if (ngForm && ngForm.submitted && ngForm.form.valid ) {
      if (this.contactData.privacy) {
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
          this.divTouched = false;
      }
    }
  }
}
