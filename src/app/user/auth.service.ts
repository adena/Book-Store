import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: { email: string; password: string } = null;
  userData: Observable<firebase.User>;


  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('current-user', JSON.stringify({ email, password }));
        this.currentUser = { email, password };

        console.log('You are Successfully logged in!', this.isLogged);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  SignOut() {
    this.angularFireAuth
      .auth
      .signOut()
      .then(res => {
        this.currentUser = null;
        localStorage.removeItem('current-user');
        console.log(this.isLogged);
      });
  }
}
