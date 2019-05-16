import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { Platform } from '../../models/platform';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
  public platforms: Platform[];
  public isCollapsed: boolean;
  constructor(private platformService: PlatformService) { }

  ngOnInit() {
    this.isCollapsed = true;
    this.platformService.getAll().subscribe(result => this.platforms = result);
  }
}
