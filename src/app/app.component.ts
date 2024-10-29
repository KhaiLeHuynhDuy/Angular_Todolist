import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fe-angular';
  users = DUMMY_USERS;
  //hien thi ten nguoi dung duoc chon
  selectUserByName: string = '';
  //nhan dau vao la id khi nguoi dung duoc chon
  onSelectedUser(id: string){
    const userbyname =DUMMY_USERS.find(user=>user.id===id)
    if(userbyname){
      this.selectUserByName=userbyname.name;
    }
  }
}
