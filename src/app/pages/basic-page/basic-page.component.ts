import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-basic-page',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, FooterComponent],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);
  //currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('carmelo');
  nameUpper = signal('CARMELO');
  fullName  = signal('caRmeLo ChERy');

  customDate  = signal(new Date());

  tickingDateEffect = effect((onCleanup) =>{
    const interval = setInterval(() =>{
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });
}
