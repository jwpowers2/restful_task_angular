import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BodyService{
  private task:any;
  constructor(private http:HttpClient){

  }

  createOne(task,cb){
    
    this.http.post("/tasks",task)
    .subscribe(data=>cb(data));
  }

  getAllTasks(cb){
  	this.http.get("/tasks")
  	.subscribe(data=>cb(data));

  }
  destroy(id,cb){
     
    this.http.delete("/tasks/" + id)
    .subscribe(data=>cb(data));
      
  }
  update(id,task,cb){
     
    this.http.put("/tasks/" + id,task)
    .subscribe(data=>cb(data));
      
  }
}
