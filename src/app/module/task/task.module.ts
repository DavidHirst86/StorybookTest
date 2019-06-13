import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from 'src/app/components/task/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }


export interface Task {
  //what type of data to expect for each of these variables. 
  id: string;
  title: string;
  state: string;
}
