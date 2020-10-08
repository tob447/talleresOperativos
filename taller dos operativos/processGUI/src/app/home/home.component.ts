import { Component, OnInit } from '@angular/core';
import {ApiInteractionService} from  '../api-interaction.service'
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private interactionService:ApiInteractionService) { }
  processlist
  pid


  ngOnInit(): void {
    const petitions = interval(1000);
 
    const takeFourNumbers = petitions.subscribe(
      ()=>this.interactionService.getProcesses().subscribe(
        data=> {
          this.processlist=data
          console.log(this.processlist)
        }
      ));

    
  }

  killProcess(){
    console.log(this.pid)
    this.interactionService.killProcess(this.pid)
  
    
    
  }
  

}
