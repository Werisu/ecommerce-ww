import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ListUsersService, User } from 'user-data-access';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'lib-user',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  /*
  createdAt: string
  name: string
  avatar: string
  email: string
  biography: string
  id: string
  */
  user$: Observable<User[]>;
  displayedColumns: string[] = ['id', 'name', 'email', 'biography'];

  constructor(private listUsersService: ListUsersService) {
    this.user$ = this.listUsersService.getUsers();
  }
}
