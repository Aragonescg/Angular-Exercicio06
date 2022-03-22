import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  nomed: string = ''
  sobrenomed: string = ''
  usernamed: string = ''
  cpfd: string = ''
  telefoned: string = ''
  enderecod: string = ''
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
