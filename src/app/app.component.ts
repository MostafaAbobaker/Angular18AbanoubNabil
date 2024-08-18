import { Component } from '@angular/core';
interface Server {
  name: string,
  content:string,
  type:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'full-demo';

  serverName:string =''
  serverContent:string = ''

  serverList:Server[] | undefined

  onAddServer() {

  }

  onAddPrintBlue() {

  }
}
