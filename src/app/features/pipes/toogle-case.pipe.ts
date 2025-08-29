import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCase'
})
export class ToogleCasePipe implements PipeTransform {

  transform(value: string, upper: boolean = true): string {
    return !!upper ? value.toUpperCase() : value.toLowerCase();
  }

}
