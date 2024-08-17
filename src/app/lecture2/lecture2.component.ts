import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture2',
  templateUrl: './lecture2.component.html',
  styleUrl: './lecture2.component.scss'
})
export class Lecture2Component {
  userName:string = ''

  checkedButton() {
    let pat = /\s/.test(this.userName);
    return pat;
  }

  reset() {
    this.userName = '';
  }
}
