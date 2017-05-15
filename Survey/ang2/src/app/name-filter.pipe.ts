import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name_filter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: any[], filter_name: string): any {
  	if(!filter_name){ return value }

  	return value.filter(user => user.Question.toLowerCase().indexOf(filter_name.toLowerCase()) > -1)
  }

}
