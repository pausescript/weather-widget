import { MatchingHandler } from '@angular/compiler-cli/src/ngcc/src/analysis/decoration_analyzer';
import { Pipe, PipeTransform } from '@angular/core';

declare let Math: any;
@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === 'C') {
      return Math.round(value);
    } else {
      return Math.round((value * 9 / 5) + 32);
    }
  }

}
