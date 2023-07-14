import { Component} from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  faLock=faLock;
  tittle ='Registration Form';
  regisform!:FormGroup
  submitted=false;



constructor(private formBuilder: FormBuilder,private regService:LoginServiceService,private route:Router){}

ngOnInit()
{

    this.regisform=new FormGroup({
      Name:new FormControl(null,Validators.required),
      Email:new FormControl(null,[Validators.required,Validators.email]),
      Password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      PhoneNumber:new FormControl(null,Validators.required)

    //validations
  })
}

onSubmit()
{
  
 this.regService.onReg(this.regisform.value).subscribe(result=> {
  console.log(result)
  this.route.navigateByUrl('/login');
 }
  
 );
}
}
