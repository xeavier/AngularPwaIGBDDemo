import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { GamesListComponent } from './pages/games-list/games-list.component';
import { UpcomingGamesComponent } from './pages/upcoming-games/upcoming-games.component';
import { PlatformResolver } from './shared/resolvers/platform.resolver';

const routes: Routes = [
  {
    path: 'game-details/:id',
    component: GameDetailsComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'games-list/:id',
    component: GamesListComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {platform: PlatformResolver}
  },
  {
    path: '',
    component: UpcomingGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,  onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
