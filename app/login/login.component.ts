import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private route:Router, private http:HttpClient,private fb:FormBuilder,private api:LoginService){}
ngOnInit(): void {
  
}

public frm=this.fb.group({
  fname:this.fb.control('',[Validators.required, 
  Validators.minLength(5),
  Validators.pattern('^[a-zA-Z ]*$')]),

  password:this.fb.control('',[Validators.required, Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')])
})
get fname(){
  return this.frm.controls.fname as FormControl;
}
get password(){
  return this.frm.controls.password as FormControl;
}

  Login(){
    
    this.api.getdata().subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.fname == this.frm.value.fname && a.password==this.frm.value.password

      })
      if(user){
        alert(" login sucessfully");
        this.frm.reset();
        this.route.navigate(['home'])
      }else{
        alert("user not found");
      }
     } ,error=>{
      alert("error");
     
       })
    }
}
