import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  
  constructor() { }

  

  setSharedData(data: any) {
    this.dataSubject.next(data);
  }

  getSharedData() {
    return this.dataSubject.asObservable();
  }
}
