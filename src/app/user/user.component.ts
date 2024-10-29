import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input() avatar!: string;
  @Input() name !:string;
  @Output() select = new EventEmitter<string>();
  get UsersImagePath(){
    return '/assets/users/'+ this.avatar;
  }
  onSelectedUser() {
    this.select.emit(this.id);
  }
}
