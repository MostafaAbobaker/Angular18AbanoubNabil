import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  items:any[]=[
    {id:1, name:'item1'},
    {id:2, name:'item2'},
    {id:3, name:'item3'},
    {id:4, name:'item4'},
    {id:5, name:'item5'},
    {id:6, name:'item6'},

  ]
}
