import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { User } from '../../models/user.model';
import { ListUsersService } from './list-users.service';

describe('ListUsersService', () => {
  let service: ListUsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListUsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return users correctly', () => {
    // ARRANGE
    const url = `${service.apiUrl}/users`;
    let result: User[] = [];

    // ACT
    service.getUsers().subscribe((users) => (result = users));

    // ASSERT
    const request = httpMock.expectOne(url);
    request.flush([]);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual([]);
  });
});
