import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HomeHistory } from './body/Home-History.component';
import { HomeSource } from './body/Home-source.component';
import { Talk } from './body/Talk-Read.component';
import { TalkSource } from './body/Talk-source.component';

const routes: Routes = [
  { path: 'Home', component: BodyComponent },
  { path: 'Home-source', component: HomeSource },
  { path: 'Home-history', component: HomeHistory },
  { path: 'Talk', component: Talk },
  { path: 'TalkSource', component: TalkSource },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
