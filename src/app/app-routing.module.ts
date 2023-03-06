import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HikeComponent } from './hike/hike.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PackingListComponent } from './packing-list/packing-list.component';

const routes: Routes = [
  { path: "packing-list", component: PackingListComponent },
  { path: "imprint", component: ImprintComponent },
  { path: "hike", component: HikeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
