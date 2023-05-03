import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipe implements PipeTransform {

  transform(duration: number): string {
    return duration===0?"":Math.floor(duration/60)+"hr "+(duration%60)+"min"
  }

}

