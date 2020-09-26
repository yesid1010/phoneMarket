import { Component, OnInit } from '@angular/core';
import {AuthService} from './../services/auth.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public folder: string;
  constructor(private auth:AuthService, private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  logout(){
    this.auth.logout()
    .then(()=>{
      this.router.navigate(['/login']);
    })
  }
}
