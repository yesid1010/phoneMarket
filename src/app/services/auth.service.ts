import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,  private db : AngularFirestore) { }

    // metodo para registrar un nuevo usuario
    register(email : string, password : string, name : string){
      return new Promise ((resolve, reject) => {
        this.AFauth.createUserWithEmailAndPassword(email, password).then( res =>{
          const uid = res.user.uid;
            this.db.collection('users').doc(uid).set({
              name : name,
              uid : uid
            })   
          resolve(res)
        }).catch( err => reject(err))
      })
    }

    // metodo para iniciar sesion
    login(email:string,password:string){
      return new Promise((resolve,reject)=>{
        this.AFauth.signInWithEmailAndPassword(email,password).then(user =>{
          resolve(user)
        })
        .catch(err=>reject(err))
      })
    }

   // metodo para cerrar sesion
    logout(){
      return new Promise((resolve,reject)=>{
        this.AFauth.signOut().then(()=>{
          resolve();
        })
        .catch(err => reject(err))
      })
    }

  // funcion para obtener el usuario logueado
  observer(){
    return new Promise ((resolve)=>{
      this.AFauth.onAuthStateChanged((user)=>{
        if(user){
          resolve(user.uid)
        }
      })
    })
  }
}
