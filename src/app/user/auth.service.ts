import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService, GlobalConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  options: GlobalConfig;

  currentUser: { email: string; password: string } = null;
  userData: Observable<firebase.User>;


  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private angularFireAuth: AngularFireAuth, private toastr: ToastrService) {
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

        this.handleSuccess("You successfully signed in!")
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        this.handleError(err);
      });
  }

  SignOut() {
    this.angularFireAuth
      .auth
      .signOut()
      .then(res => {
        this.currentUser = null;
        localStorage.removeItem('current-user');
        this.handleSuccess("You successfully signed out!")
      });
  }


  handleSuccess(msg: string) {
    var options = {
      "positionClass": "toast-top-center",
    }

    this.toastr.success(msg, 'Success', options);
  }

  handleError(err) {
    var options = {
      "positionClass": "toast-top-center",
    }

    this.toastr.error(err, 'Error', options)
  }
}
