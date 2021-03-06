
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TaskModel } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(private httpClient: HttpClient) { }

  public listTasks() {
    return this.httpClient.get<string[]>(environment.apiURL + 'magic/modules/system/scheduler/list-tasks');
  }

  public getTask(name: string) {
    return this.httpClient.get<TaskModel>(environment.apiURL + `magic/modules/system/scheduler/get-task?name=${encodeURIComponent(name)}`);
  }

  public createTask(task: TaskModel) {
    return this.httpClient.post<any>(environment.apiURL + 'magic/modules/system/scheduler/create-task', task);
  }

  public deleteTask(name: string) {
    return this.httpClient.delete<any>(environment.apiURL + `magic/modules/system/scheduler/delete-task?name=${encodeURIComponent(name)}`);
  }

  public isRunning() {
    return this.httpClient.get<any>(environment.apiURL + 'magic/modules/system/scheduler/is-running');
  }

  public turnOff() {
    return this.httpClient.post<any>(environment.apiURL + 'magic/modules/system/scheduler/is-running',{
      value: false
    });
  }

  public turnOn() {
    return this.httpClient.post<any>(environment.apiURL + 'magic/modules/system/scheduler/is-running',{
      value: true
    });
  }
}
