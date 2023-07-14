import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import {  Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginServiceService } from 'src/app/Services/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faLock=faLock;
  tittle ='Login Form';
  regisform!:FormGroup
  submitted=false;

  constructor(private formBuilder: FormBuilder, private logService :LoginServiceService,private route:Router){}

  ngOnInit()
{
  this.regisform=new FormGroup({
    Email:new FormControl(null,[Validators.required,Validators.email]),
    Password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
    
   
    //validations
  })
}

onSubmit()
{
  this.logService.onSubmit(this.regisform.value).subscribe((res:any) => {
    console.log('res',res)
    localStorage.setItem('token',res.token);
    this.route.navigateByUrl('/userlist');
  })
}

}
