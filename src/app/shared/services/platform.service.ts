import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform } from '../models/platform';
import { first, map } from 'rxjs/operators';
import { MapperHelperService } from './mapper-helper.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private apiUrl: string;
  private apiToken: string;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.apiToken = environment.apiToken;
   }

  public getAll(): Observable<Platform[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-key':  this.apiToken,
      })};
      
    return this.httpClient.request<Platform[]>('GET', `${this.apiUrl}platforms/?fields=id,name&filter[product_family][eq]=(1,2,3,5)&filter[generation][eq]=(0,8)&order=created_at:desc`, httpOptions);
  }

  public get(platformId: number): Observable<Platform> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-key':  this.apiToken,
      })};
    return this.httpClient.request<any>('GET', `${this.apiUrl}platforms/${platformId}/?fields=id,name,summary,platform_logo.url,platform_logo.height,platform_logo.width,product_family.name`, httpOptions).pipe(
      map(platforms => MapperHelperService.MapPlatform(platforms[0])));
  }
}
