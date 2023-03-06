import { Component } from '@angular/core';
import { PackingList } from '../packing-list';
import { PackingListHikeService } from '../packing-list-hike.service';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css']
})
export class HikeComponent {
  packinglisthike: PackingList[]=[];
  
  constructor(private packinglisthikeService: PackingListHikeService ){
    this.refresh();
  }

  async add (title: string){
    await this.packinglisthikeService.add(title);
    await this.refresh();
  }

  async toggleDone(listitemhike: PackingList) {
    listitemhike.done = !listitemhike.done;
    await this.packinglisthikeService.packinglisthike.put(listitemhike);
    await this.refresh();
  }

  async refresh() {
    this.packinglisthike = await this.packinglisthikeService.getAll();
  }
}
