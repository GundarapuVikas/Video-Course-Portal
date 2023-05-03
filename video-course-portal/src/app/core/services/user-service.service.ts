import { Injectable } from '@angular/core';
import { userMockData } from '../data/userMockData';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getUsers(){
    return userMockData;
  }
}
