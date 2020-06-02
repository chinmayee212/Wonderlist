import { Component, OnInit } from '@angular/core';
import { GettaskserviceService } from '../gettaskservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  message = '';
  currentTask = null;
  constructor(private gettaskservice: GettaskserviceService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
  }

  getTask(id){
    this.gettaskservice.get(id).subscribe(data => {
      this.currentTask = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  updateTask(){
    this.gettaskservice.update(this.currentTask.id, this.currentTask).subscribe(response =>
      {
      this.message = 'Updated Sucessfully';
    },
    error => {
      console.log(error);
    });
  }

  deleteTask(){
    this.gettaskservice.delete(this.currentTask.id).subscribe(response => {
      console.log(response);
      this.message = 'Deleted successfully';
    }, error => {
      console.log(error);
    });
  }

  updatePublished(status){
    const data = {
      title: this.currentTask.title,
      description: this.currentTask.description,
      // tslint:disable-next-line: object-literal-shorthand
      status: status,
      label: this.currentTask.label,
      duedate: this.currentTask.duedate
    };
    this.gettaskservice.update(this.currentTask.id, data).subscribe(response => {
        this.currentTask.status = true;
        console.log(response);
    }, error => {
      console.log(error);
    });
    }


}
