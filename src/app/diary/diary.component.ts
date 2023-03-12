import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, Injectable, NgZone, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {take} from 'rxjs/operators';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})

//Injectable ja ode rnein - ist von mir 
@Injectable()
export class DiaryComponent {

  date = new FormControl(new Date());
  // constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  // triggerResize() {
  //   // Wait for changes to be applied, then trigger textarea resize.
  //   this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  // }

  diary: Diary[]=[];


  constructor(private diaryService: DiaryService ){
    this.refresh();
  }

  // content und Date aus Feld auslesen und an diaryService.add übergeben
  async add (content: string, date: Date | null){
    await this.diaryService.add(content, date);
    await this.refresh();
  }

  async refresh() {
    this.diary = await this.diaryService.getAll();
  }

  async reset() {
    await this.diaryService.removeAll();
    await this.refresh();
  }

  // Löscht item mit der übergebenen ID und lädt Daten neu aus DB mit refresh
  async deletediaryitem(id: string) {
    await this.diaryService.deletediaryitem(id);
    await this.refresh();
  }

}
