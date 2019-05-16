import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapperHelperService } from './mapper-helper.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl: string;
  private apiToken: string;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.apiToken = environment.apiToken;
  }

  public getAll(platformId: number, offset: number): Observable<Game[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-key':  this.apiToken,
      })};
    return this.httpClient.request<any[]>('GET', `${this.apiUrl}games/?fields=name,id,first_release_date,summary,genres.name,cover.url,cover.height,cover.width&filter[platforms][eq]=${platformId}&filter[category][eq]=0&order=popularity:desc&limit=20&offset=${offset}`, httpOptions).pipe(
      map((x: any[]) => x.map(game => MapperHelperService.MapGame(game))));
  }
}
