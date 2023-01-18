import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { RegisService } from '../service/regis.service';
import { Router } from '@angular/router';
import { user } from '../model/user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
 // modelobj:user=new user;

submitted=false;
//frm!:FormGroup;
  constructor(private fb:FormBuilder,private http: HttpClient,private api:RegisService,private route:Router){}

  ngOnInit(): void {}
    public frm=this.fb.group({
      fname: ['',[Validators.required , Validators.minLength(4),Validators.maxLength(12)]],
      lname:['',[Validators.required , Validators.minLength(4), Validators.maxLength(12)]],
      address:['',[Validators.required , Validators.minLength(5),Validators.maxLength(50)]],
      mobile:['',[Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password:['',[Validators.required , Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*[a-z]).{8,99})')]]
    })

    
  get fname(){
    return this.frm.controls.fname as FormControl;
  }
  get lname(){
    return this.frm.controls.lname as FormControl;
  }
     get address(){
    return this.frm.controls.address as FormControl;
  }
  get password(){
    return this.frm.controls.password as FormControl;
  }
  get mobile(){

    
    return this.frm.controls.mobile as FormControl;
  }
    onSubmit(){
    
    
      
      this.api.postdata(this.frm.value).subscribe(res=>{
        alert("Registration  Successfully ");
        this.route.navigate(['log']);
          },
          error=>{
            alert("not inserted");
            })
          
    
  }
  phoneKeyDown(e:any){
	 
		//const keyCode = e.keyCode;  
		if (( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) && e.keyCode !=8) {
			e.keyCode();
		} 	  
}
//onkeypress="return (event.charCode > 64 && 
  
}
