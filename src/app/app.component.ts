import { Component } from '@angular/core';
import * as _ from 'lodash';

declare const math:any;
declare const $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log(math.gcd(5,8));
  }
}
