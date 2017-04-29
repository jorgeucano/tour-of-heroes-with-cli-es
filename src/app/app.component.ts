import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
@Component({
  selector: 'heroes-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private route: ActivatedRoute) {}
}
