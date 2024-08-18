import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture2',
  templateUrl: './lecture2.component.html',
  styleUrl: './lecture2.component.scss'
})
export class Lecture2Component {
  userName:string = ''
  whiteColor:boolean= true
  backgroundColor: string = 'blue';

  displayPrag:boolean = true;
  listsEvent:any[] = [];
  checkedButton() {
    let pat = /\s/.test(this.userName);
    return pat;
  }

  reset() {
    this.userName = '';
  }

  toggleShow() {
    this.displayPrag =!this.displayPrag;
    this.listsEvent.push(1)
  }
}
