import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }


  getdata(){
    return this.http.get<any>("http://localhost:3000/posts/").pipe(map((res:any)=>{
      return res;
    }))
  }
  deledata(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    
  }
  updatedata(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
  }
  
  
  
}
