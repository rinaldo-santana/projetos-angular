import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEn: any, args?: any): any {
    if (!dataEn) {
      return '';
    }

    const dataArray = dataEn.split('-');

    if (dataArray.length !== 3) {
      return dataEn;
    }

    return dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0];
  }

}
