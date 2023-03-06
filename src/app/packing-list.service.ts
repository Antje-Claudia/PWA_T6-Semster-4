import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { PackingList } from './packing-list';

@Injectable({
  providedIn: 'root'
})
export class PackingListService extends Dexie {
  listitem!: Dexie.Table<PackingList, string>;
  constructor() { 
    super("packing-list-db");
    this.version(1).stores({
      listitem: 'id'
    })
}

  async add(title: string){
    const packinglist = {title, id: crypto.randomUUID(), done:false };
    await this.listitem.add(packinglist);
  }

  async getAll(){
    return await this.listitem.toArray();
  }

  async bulkPut(listitem: PackingList[]) {
  await this.listitem.bulkPut(listitem);
  }
}