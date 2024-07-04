import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: AngularFirestore ) { }
  onSignup(email:string,password:string){
    const user = { email: email, password: password };
    this.firestore.collection('users').doc(email).set(user)
      .then(() => {
        console.log('User signed up successfully!');
        email = '';
        password = '';
      })  
      .catch((error: any) => {
        console.error('Error signing up user: ', error);
      });
  }
}
