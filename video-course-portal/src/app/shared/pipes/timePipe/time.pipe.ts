import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipe implements PipeTransform {

  transform(duration: string): string {
    let minutes=Number(duration)
    console.log("minutes: ",minutes)
    return Math.floor(minutes/60)+"hr "+(minutes%60)+"min"
  }

}

