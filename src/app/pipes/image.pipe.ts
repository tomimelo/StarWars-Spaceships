import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, type: string): string {
    if (!img && type === "starship") {
      return 'assets/imgs/no-starship.jpg';
    }
  }

}
