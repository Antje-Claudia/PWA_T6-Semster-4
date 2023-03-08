import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, Injectable, NgZone, ViewChild} from '@angular/core';
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
  constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }}
//nochmal ein Constructor - kann das stimmen 
  export class PackingListComponent {
diary: Diary[]=[];
  
  constructor(private diaryService: DiaryService ){
    this.refresh();
  }


  async add (title: string){
    await this.diaryService.add(title);
    await this.refresh();
  }

  async refresh() {
    this.diary = await this.diaryService.getAll();
  }
}