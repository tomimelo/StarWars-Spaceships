import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, type: string): string {
    if(!img) {
      switch (type) {
        case "starship":
          return 'assets/imgs/no-starship.jpg'
        
        case "user":
          return 'assets/imgs/default-profile.png'
      
        default:
          break;
      }
    }
  }

}
