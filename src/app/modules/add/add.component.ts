import { Component, OnInit } from '@angular/core';
import { GettaskserviceService } from '../gettaskservice.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  personal: any;
  task = {
    title: '',
    description: '',
    status: false,
    duedate: '',
    label: '',
  };

  submitted = false;

  constructor(private gettaskservice: GettaskserviceService) { }

  ngOnInit(): void {

  }

  saveTask(){
    const data = {
      title: this.task.title,
      description: this.task.description,
      duedate: this.task.duedate,
      label: this.task.label,
    };
    this.gettaskservice.create(data).subscribe(response => {
      this.submitted = true;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  newTask(){
    this.submitted = false;
    this.task = {
      title: '',
      description: '',
      status: false,
      duedate: '',
      label: '',
    };
  }



}
