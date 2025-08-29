import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})
export class HeroColorPipe implements PipeTransform {

  transform(value: number, colorMap: boolean = false): string {
    if(!colorMap) return Color[value];
    return ColorMap[value as keyof typeof ColorMap] || '#FFFFFF';
  }

}
