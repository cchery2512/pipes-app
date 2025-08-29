import { Component, signal } from '@angular/core';
import { ToogleCasePipe } from '../../features/pipes/toogle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../features/pipes/can-fly.pipe';
import { HeroColorPipe } from '../../features/pipes/hero-color.pipe';
import { HeroCreatorPipe } from '../../features/pipes/hero-creator.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroSortByPipe } from '../../features/pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../features/pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToogleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
     HeroCreatorPipe,
     TitleCasePipe,
     HeroSortByPipe,
    HeroFilterPipe
  ],
  templateUrl: './custom-page.component.html',
  styles: ``
})
export default class CustomPageComponent {
  name  = signal('Carmelo Chéry');
  uppercase = signal(true);
  heroes = signal(heroes);

  changeToggleCase(value: boolean){
    this.uppercase.update((value) => !!value ? false : true);
  }

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');
}
