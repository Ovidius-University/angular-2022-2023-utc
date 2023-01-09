import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { GamePageComponent } from './game-page/game-page.component';

const routes: Routes = [
  { component: DashboardPageComponent, path: '' },
  {
    path: 'game-page',
    component: GamePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
