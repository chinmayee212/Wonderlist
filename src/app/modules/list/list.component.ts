import { Component, OnInit   } from '@angular/core';

import { GettaskserviceService } from '../gettaskservice.service';

export interface UserData {
  id: string;
  title: number;
  description: number;
  status: number;
  duedate: number;
  label: number;
  createdAt: number;
  updatedAt: number;


}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public result: any = [];
  currentTask = null;
  currentIndex = -1;
  title = '';
  personal: any = [];
  shopping: any = [];
   others: any = [];
   work: any = [];

  constructor(private gettododata: GettaskserviceService) {

   }

  ngOnInit(): void {
    this.retrieveTask();
    this.countlabel();
    this.countlabelShopping();
    this.countlabelOthers();
    this.countlabelWork();

  }

  retrieveTask(){
    this.gettododata.getAll().subscribe(data => {
      console.log(data);
      this.result = data;
    }, error => {
      console.log(error);
    });
  }

  refreshList(){
    this.retrieveTask();
    this.currentIndex = -1;
    this.currentTask = null;
  }

  removeAllTask(){
    this.gettododata.deleteAll().subscribe(response => {
      console.log(response);
      this.retrieveTask();
    }, error => {console.log(error);
    });
  }

  setActiveTask(todo, index){
    this.currentTask = todo;
    this.currentIndex = index;
  }
  countlabel(){
    this.gettododata.personal().subscribe(data => {
      this.personal = data;
    }, error => {
      console.log(error);
    });
  }

  countlabelShopping(){
    this.gettododata.shopping().subscribe(data => {
      this.shopping = data;
    }, error => {
      console.log(error);
    });
  }
  countlabelOthers(){
    this.gettododata.others().subscribe(data => {
      this.others = data;
    }, error => {
      console.log(error);
    });
  }
  countlabelWork(){
    this.gettododata.work().subscribe(data => {
      this.work = data;
    }, error => {
      console.log(error);
    });
  }

  searchTitle() {
    this.gettododata.findByTitle(this.title)
      .subscribe(
        data => {
          this.result = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
