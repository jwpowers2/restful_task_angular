import { Component, OnInit } from '@angular/core';


import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  tasks = [];
  constructor(public _httpService: HttpService){}
  ngOnInit(){

    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    observable.subscribe(data => {

      console.log("Got our tasks!", data);
      this.tasks = data['tasks'];

    });
  }

}
