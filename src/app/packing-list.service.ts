import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { PackingList } from './packing-list';

@Injectable({
  providedIn: 'root'
})
export class PackingListService extends Dexie {
  // 1. Dexie wird mit Interface PackingList erstellt
  packinglist!: Dexie.Table<PackingList, string>;
  
  constructor() { 
    super("packing-list-db");
    this.version(1).stores({
      packinglist: 'id'
    })
}

  async add(title: string){
    const listitem = {title, id: crypto.randomUUID(), done:false };
    await this.packinglist.add(listitem);
  }

  async getAll(){
    return await this.packinglist.toArray();
  }

  async bulkPut(packinglist: PackingList[]) {
  await this.packinglist.bulkPut(packinglist);
  }
}