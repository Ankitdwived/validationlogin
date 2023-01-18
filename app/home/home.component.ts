import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { user } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  modelobj:user =new user;
 public frm!:FormGroup;
  constructor(private fb:FormBuilder,private http: HttpClient,private api:HomeService,private route:Router){}
  ngOnInit(): void {
    this.submit();
   
  
  
   this.frm=this.fb.group({
   // id:[''],
    fname: [' ',[Validators.required , Validators.minLength(4)]],
    lname:['',[Validators.required , Validators.minLength(4)]],
    address:['',[Validators.required , Validators.minLength(4)]],
    mobile:['',[Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password:['',[Validators.required , Validators.minLength(4)]]
  }) 
 
  }
  alldata:any;
   submit(){
  
    this.api.getdata().subscribe(res=>{
      this.alldata=res;
    })
  }

  delet(data:number){
    this.api.deledata(data).subscribe((res)=>{
      alert("Student record deleted successfully");
      
      //this.formValue.reset()
      this.submit()
  },
  error=>{
    alert("data not deleted");
    })
  }
  
  showEdit = false
  onEditResto(data:any){
    this.showEdit = true
    console.log("hello")
    this.modelobj.id=data.id;
    this.frm.controls['fname'].setValue(data.fname);
    this.frm.controls['lname'].setValue(data.lname);
    this.frm.controls['mobile'].setValue(data.mobile);
    this.frm.controls['address'].setValue(data.address);
    this.frm.controls['password'].setValue(data.password);
    
}
hidden(){
  this.showEdit=false;
}

update(){
//  this.frm.value.id;
this.modelobj.fname=this.frm.value.fname;
 this.modelobj.lname= this.frm.value.lname;
 this.modelobj.mobile=this.frm.value.mobile;
 this.modelobj.address=this.frm.value.address;
 this.modelobj.password=this.frm.value.password;
  this.api.updatedata(this.modelobj,this.modelobj.id) .subscribe(res=>{
    alert("data update successfully");this.submit();
},
error=>{
  alert("not update");
})
}

}
  
