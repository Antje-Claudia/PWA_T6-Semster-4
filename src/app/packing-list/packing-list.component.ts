import { Component } from '@angular/core';
import { PackingListService } from '../packing-list.service';
import { PackingList } from '../packing-list';

@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.css']
})
export class PackingListComponent {

  packinglist: PackingList[]=[];

  constructor(private packinglistService: PackingListService ){
    this.refresh();
  }

  async add (title: string){
    await this.packinglistService.add(title);
    await this.refresh();
  }

  async toggleDone(listitem: PackingList) {
    listitem.done = !listitem.done;
    await this.packinglistService.packinglist.put(listitem);
    await this.refresh();
  }

  async refresh() {
    this.packinglist = await this.packinglistService.getAll();
    
  }
}
