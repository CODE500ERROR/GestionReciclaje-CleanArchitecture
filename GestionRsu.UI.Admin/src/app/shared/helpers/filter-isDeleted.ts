import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterIsDeleted',
    pure: false
})
export class FilterIsDeletedPipe implements PipeTransform {
    transform(items: any[]): any[] {
        if (!items) {
            return items;
        }
        return items.filter((item) => !item.isDeleted);
    }

}
