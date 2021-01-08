import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache = {};

  constructor() { }

  put(req: HttpRequest<any>, res: HttpResponse<any>): void {
    this.cache[req.urlWithParams] = {
      res,
      time: Date.now()
    }
  }

  get(req: HttpRequest<any>): HttpResponse<any> | null {
    if (this.cache[req.urlWithParams]) {
      const secondsPast = (Date.now()-this.cache[req.urlWithParams].time)/1000;
      if(secondsPast < 300) {
        return this.cache[req.urlWithParams].res;
      }

    }
    return null;
  }
}
