import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  username: string = '';
  password: string = '';

  login() {
  
    if (this.username === this.password ) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}
