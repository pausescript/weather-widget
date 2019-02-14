import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compass'
})
export class CompassPipe implements PipeTransform {

  transform(angle: any, args?: any): any {
    const directions = 8;
    const degree = 360 / directions;
    angle += (degree / 2);

    if (angle >= 0 * degree && angle < 1 * degree) {
      return 'N';
    }
    if (angle >= 1 * degree && angle < 2 * degree) {
      return 'NE';
    }
    if (angle >= 2 * degree && angle < 3 * degree) {
      return 'E';
    }
    if (angle >= 3 * degree && angle < 4 * degree) {
      return 'SE';
    }
    if (angle >= 4 * degree && angle < 5 * degree) {
      return 'S';
    }
    if (angle >= 5 * degree && angle < 6 * degree) {
      return 'SW';
    }
    if (angle >= 6 * degree && angle < 7 * degree) {
      return 'W';
    }
    if (angle >= 7 * degree && angle < 8 * degree) {
      return 'NW';
    }
    // Should never happen:
    return 'N';
  }
}

