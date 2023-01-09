import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GameCardComponent } from './game-card/game-card.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GamePageComponent } from './game-page/game-page.component';

@NgModule({
  declarations: [DashboardPageComponent, GameCardComponent, GamePageComponent],
  imports: [CommonModule, DashboardRoutingModule, NzCardModule, NzButtonModule, FormsModule, NzInputModule],
})
export class DashboardModule { }
