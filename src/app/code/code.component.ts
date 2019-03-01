import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  public ePlastick:boolean = true;
  public eGo:boolean = false;
  public eRofi:boolean = false;
  public eWeb:boolean = false;
  public eGender:boolean = false;

  constructor() {
    console.log("code constructor, eGo is:", this.eGo);
  }

  ngOnInit() {
  }

  sPlastick(){ this.ePlastick = !this.ePlastick }
  sGo(){ this.eGo = !this.eGo }
  sRofi(){ this.eRofi = !this.eRofi }
  sWeb(){ this.eWeb = !this.eWeb }
  sGender(){ this.eGender = !this.eGender }


}
