import { Component, inject } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [UpperCasePipe],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  localeService = inject(LocaleService);

  changeLocale(locale: AvailableLocale){
    this.localeService.changeLocale(locale);
  }
}
