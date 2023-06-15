import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
  }
}
