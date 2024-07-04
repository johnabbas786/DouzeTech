import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Douzetech';

  constructor(private router: Router) {}

  // onOpen() {
  //   console.log('John')
  //   this.router.navigate(['login']);
  // }
}
