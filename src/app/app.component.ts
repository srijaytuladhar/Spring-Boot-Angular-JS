import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Topic, Topics } from './topic.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  topic: Topic = new Topic;
  topics$: Topic[] = [];
 
  message: string = "";
  newarr = this.topics$.sort((a, b) => b.id - a.id);
 

  constructor(private dataService: DataService, private toastr: ToastrService) {

  }
  title: string = "REST API";

  ngOnInit() {
    console.log(this.newarr);

    return this.dataService.getTopics()
      .subscribe(data => this.topics$ = data);
  }


  save() : void {
    console.log("button will work soon....")
  }
  
  
  onDelete(topic: Topic) {
    console.log("button clicked!!");
    this.dataService.deleteTopic(topic).subscribe(() => (this.topics$ = this.topics$.filter(s => s.id!= topic.id)));
        
    //console.log("Topic with id: " + topic.id + " deleted!!");
    this.message = "Topic with id: " +topic.id+ " deleted successfully!!";
      
    this.toastr.warning( 'Topic deleted!!'); 
    setTimeout(function(){
      window.location.reload();
    }, 2000);
    //alert("Topic with id: " +topic.id+ " deleted successfully!!");
    //window.location.reload();
    
  }
  

  
  addTopic() {


    let newTopic: Topic = new Topic();

    /*
    if(!this.topic.id) {
      alert('ID Cannot be empty!!');
      return;
    }*/


    
    newTopic = this.topic;

    this.dataService.addTopic(newTopic)
    .subscribe(data => (this.topics$.push(newTopic)));

    console.log(this.topic);

    this.topic = new Topic();

    this.message = "Topic added successfully!!";
    //alert('Topic record added successfully!!');
    //window.location.reload();
    this.toastr.success('Topic added!!'); 
    setTimeout(function(){
      window.location.reload();
    }, 2000);
  }

  updateTopic( topic: Topic) {

    let updateTopic: Topic = new Topic();

    
    updateTopic = topic;

    
    //console.log("Topic with id: " +id+ " updated successfully!!")

    this.dataService.updateTopic(topic).subscribe(data => this.topics$.push(topic));

    this.message = "Topic with id: " +topic.id+ " updated successfully!!";
    console.log(topic);


    this.toastr.info("Topic with id: " +topic.id+ " updated successfully!!");
    setTimeout(function(){
      window.location.reload();
    }, 2000);
  }
  

}
