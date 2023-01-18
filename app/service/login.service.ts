import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get<any>("http://localhost:3000/posts/").pipe(map((res:any)=>{
      return res;
    }))
  }
}
