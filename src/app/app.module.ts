import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UpcomingGamesComponent } from './pages/upcoming-games/upcoming-games.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { GamesListComponent } from './pages/games-list/games-list.component';
import { PlatformsComponent } from './shared/components/platforms/platforms.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlatformResolver } from './shared/resolvers/platform.resolver';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingGamesComponent,
    GameDetailsComponent,
    GamesListComponent,
    PlatformsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    PlatformResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
