import { Component ,Input} from '@angular/core';
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from '../user/dummy-users';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input() name!:string;
}
