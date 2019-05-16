import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PlatformService } from '../services/platform.service';

@Injectable()
export class PlatformResolver implements Resolve<any> {
  constructor(private platformService: PlatformService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.platformService.get(Number(route.paramMap.get('id')));
  }
}
