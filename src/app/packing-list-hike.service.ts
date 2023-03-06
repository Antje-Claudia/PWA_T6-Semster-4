import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { PackingList } from './packing-list';


@Injectable({
  providedIn: 'root'
})
export class PackingListHikeService extends Dexie{
  packinglisthike!: Dexie.Table<PackingList, string>;
  constructor() { 
    super("packing-list-hike-db");
    this.version(1).stores({
      packinglist: 'id'
    })
}

  async add(title: string){
    const listitem = {title, id: crypto.randomUUID(), done:false };
    await this.packinglisthike.add(listitem);
  }

  async getAll(){
    return await this.packinglisthike.toArray();
  }

  async bulkPut(packinglist: PackingList[]) {
  await this.packinglisthike.bulkPut(packinglist);
  }
}
