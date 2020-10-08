import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionService {

  processlist;

  constructor(private http: HttpClient) { }

  getProcesses(){
   return this.http.get("http://127.0.0.1:5000/")
  }

  killProcess(pid){
    this.http.post("http://127.0.0.1:5000/",{"pid":pid})
  }
 
}
