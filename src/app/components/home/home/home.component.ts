import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language_service/LanguageService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    // contructor
  }
  ngOnInit(): void {
    const currentLanguage: string = this.languageService.getCurrentLanguage();
    this.translate.use(currentLanguage);
  }
  switchLanguage(language: string) {
    this.languageService.setCurrentLanguage(language);
  }
}
