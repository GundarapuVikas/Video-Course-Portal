import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(date:string): string {
    //date:2023-05-27
    const dateArray:string[]=date.split('-');
    [dateArray[0],dateArray[2]]=[dateArray[2],dateArray[0]];
    return dateArray.join('/');
  }

}
