import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackingListComponent } from './packing-list/packing-list.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SkiTourComponent } from './ski-tour/ski-tour.component';
import { SummerTripComponent } from './summer-trip/summer-trip.component';
import { HikeComponent } from './hike/hike.component';
import { WeekendTripComponent } from './weekend-trip/weekend-trip.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DiaryComponent } from './diary/diary.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PackingListComponent,
    ImprintComponent,
    NavComponent,
    SkiTourComponent,
    SummerTripComponent,
    HikeComponent,
    WeekendTripComponent,
    HomeComponent,
    DiaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates.subscribe((evt) => {
      if (evt.type === 'VERSION_READY' && confirm ("We have a new version for you 🥳")) {
        location.reload();
      }
    })
  }
 }
