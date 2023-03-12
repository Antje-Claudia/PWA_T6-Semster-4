import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Diary } from './diary';

@Injectable({
  providedIn: 'root'
})
export class DiaryService extends Dexie{
  // 1. Dexie wird mit Interface Diary erstellt
  diarylist!: Dexie.Table<Diary, string>;
  
  constructor() { 
    super("diary-db");
    this.version(1).stores({
      diarylist: 'id'
    })
}

// content und datum hinzufügen
async add(content: string, date: Date | null){
  const diaryitem = {id: crypto.randomUUID(), content, date };
  await this.diarylist.add(diaryitem);
}

async getAll(){
  // Daten aus Dexi lesen und in Array konvertieren, sowie returnen
  return await this.diarylist.toArray();
}


// Geht nicht 
async removeAll() {
  await this.diarylist.clear;
}

// Löscht item mit der übergebenen ID 
async deletediaryitem(id: string) {
  await this.diarylist.delete(id);
}

}