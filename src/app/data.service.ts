import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userSource = new BehaviorSubject<string>("usuario")
  currentUser = this.userSource.asObservable();

  constructor() { }

  updateUser(user: string){
    this.userSource.next(user)
  }

}
