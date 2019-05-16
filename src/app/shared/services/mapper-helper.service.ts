import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Platform } from '../models/platform';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export abstract class MapperHelperService {

  constructor() { }


  public static MapGame(obj: any): Game {
    return {
      name: obj.name,
      id: obj.id,
      summary: obj.summary,
      releaseDate: new Date(obj.first_release_date * 1000),
      cover: obj.cover ? this.MapImage(obj.cover) : null,
      genres: obj.genres ? obj.genres.map(g => g.name) : null
    } as Game;
  }

  public static MapPlatform(obj: any) {
    return {
      name: obj.name,
      id: obj.id,
      summary: obj.summary,
      logo: obj.platform_logo ? this.MapImage(obj.platform_logo) : null,
      company: obj.product_family ? obj.product_family.name : null
    } as Platform;
  }

  private static MapImage(obj: any) {
    return {
      url: obj.url,
      height: obj.height,
      width: obj.width
    } as Image;
  }
}
