import { Component, OnInit } from "@angular/core";
import { BodyService } from "../body.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  private task:any;
  private tasks:any;
  private up:any;

  constructor(private bs:BodyService) { 
  }

  ngOnInit() {

    this.task = {
      title:"",
      description:"",
      completed:false
    };
    this.up = {
      title:"",
      description:"",
      completed:false
    };
    this.all();
  }
  create(){
    this.bs.createOne(this.task,(data)=>{
      console.log(data);
      this.all();
    });
    
  }
  all(){
    this.bs.getAllTasks(data=>{
      this.tasks = data.tasks;
      
    });
  }
  destroy(id){
    this.bs.destroy(id,(data)=>{
      console.log(id);
      this.all();
    });
  }
  update(id){
    this.bs.update(id,this.up,(data)=>{
      console.log(this.up);
      this.all();
    });
  }
}
