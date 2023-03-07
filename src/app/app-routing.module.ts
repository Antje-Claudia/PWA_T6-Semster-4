import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PackingListComponent } from './packing-list/packing-list.component';

const routes: Routes = [
  { path: "packing-list", component: PackingListComponent },
  { path: "imprint", component: ImprintComponent },
  { path: "home", component: HomeComponent },
  { path: "diary", component: DiaryComponent },
  { path: "", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
