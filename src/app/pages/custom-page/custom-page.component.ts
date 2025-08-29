import { Component, signal } from '@angular/core';
import { ToogleCasePipe } from '../../features/pipes/toogle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToogleCasePipe],
  templateUrl: './custom-page.component.html',
  styles: ``
})
export default class CustomPageComponent {
  name  = signal('Carmelo Chéry');
  uppercase = signal(true);

  changeToggleCase(value: boolean){
    this.uppercase.update((value) => !!value ? false : true);
  }
}
