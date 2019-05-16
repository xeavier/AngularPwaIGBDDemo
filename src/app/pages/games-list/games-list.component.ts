import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { GameService } from 'src/app/shared/services/game.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { Platform } from 'src/app/shared/models/platform';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit, OnDestroy {
  public offset: number;
  public games: Game[];
  public currentDate: Date;
  public platform: Platform;
  private navigationSubscription: Subscription;
  constructor(private gameService: GameService, private platformService: PlatformService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.platform = {} as Platform;
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
        this.search();
      }
    });
   }

  ngOnInit() {
    this.platform = this.activatedRoute.snapshot.data.platform as Platform;
    this.offset = 0;
    this.currentDate = new Date();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }

  public search(): void {
    this.gameService.getAll(this.platform.id, this.offset).subscribe(result => this.games = result);
  }
}
