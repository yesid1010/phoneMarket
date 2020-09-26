import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  public  email : string;
  public  name : string;
  public password : string;
  public icon:boolean = true;
  public image;
  url:any;
  constructor(private authService:AuthService) { }


  SignUp(){
    this.authService.register(this.email,this.password,this.name)
    .then(data => {
      console.log(data)
    })
   }
}
