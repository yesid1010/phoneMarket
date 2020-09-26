import { Component, OnInit } from '@angular/core';
//import { AuthService } from "../../services/firebase/auth.service";
import { Router } from "@angular/router";
import {timer} from 'rxjs';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  
  showSplash = true;
  constructor(private authService:AuthService,public router: Router) { }


  ngOnInit() {
    timer(3000).subscribe(() => this.showSplash = false);
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then( res =>{
      this.email = '';
      this.password= '';
      this.router.navigate(['/home/Inbox']);
      console.log(res);
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))

    console.log(this.email,this.password)
  }

}
