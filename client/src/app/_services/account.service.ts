import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currrentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currrentUserSource.asObservable();
  
  constructor(private http: HttpClient) { }

  login(model: any)
  {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currrentUserSource.next(user);
        }
      })
    )
  }
  register(model: any){
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(user => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currrentUserSource.next(user);
        }
         
      })
    )
  }
  setCurrentUser(user: User){
    this.currrentUserSource.next(user);
  }


  logout(){
    localStorage.removeItem('user');
    this.currrentUserSource.next(null);
  }

}
