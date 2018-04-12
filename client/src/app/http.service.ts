import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()



export class HttpService {
    constructor(private _http: HttpClient){
      //this.getTasks();
      //this.makeTasks();
      //this.getOneTask();
      //this.removeTasks();
      this.modifyTasks();
    }
    getTasks(){
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.get('/tasks');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }

     makeTasks(){
      let date = new Date();
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.post('/tasks',{

        title:date.toString(),
        description:date.toString(),
        completed: true
      });
	  
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Made our task!", data));
 }
    getOneTask(){
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.get('/tasks/5acce78b11fc934c33786296');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Got our task by ID!", data));
 }

    removeTasks(){
      //let date = new Date();
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.delete('/tasks/5acf9cdce85403467384560f');
	  
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Made our task!", data));
 }

      modifyTasks(){
      //let date = new Date();
      // our http response is an Observable, store it in a variable
      let tempObservable = this._http.put('/tasks/5acf9b6262471344f11d5867',{

        title:"POOOOOOOP",
        description:"STOOOOOOOP",
        completed: true
      });
	  
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      tempObservable.subscribe(data => console.log("Made our task!", data));
 }

}

