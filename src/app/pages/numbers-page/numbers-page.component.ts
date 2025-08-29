import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe, FooterComponent],
  templateUrl: './numbers-page.component.html',
  styles: ``
})
export default class NumbersPageComponent {

  totalSells  = signal(2_433_232.5567);
  percent     = signal(0.4856)
}
