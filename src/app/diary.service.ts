import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Diary } from './diary';

@Injectable({
  providedIn: 'root'
})
export class DiaryService extends Dexie{
  packinglist!: Dexie.Table<Diary, string>;
  diary: any;
  constructor() { 
    super("diary-db");
    this.version(1).stores({
      packinglist: 'id'
    })
}

async add(title: string){
  const diaryitem = {id: crypto.randomUUID(), content:String, date: Date };
  await this.diary.add(diaryitem);
}

async getAll(){
  return await this.packinglist.toArray();
}

}