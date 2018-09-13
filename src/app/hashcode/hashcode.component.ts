import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-hashcode',
  templateUrl: './hashcode.component.html',
  styleUrls: ['./hashcode.component.css']
})
export class HashcodeComponent implements OnInit {

  keySecret: string = "";
  messageText: string = "";
  hashResult: string = "";
  constructor() { }

  ngOnInit() {
  }

  onCalculateHmac256Hash() {
    let data = CryptoJS.HmacSHA256(this.messageText, this.keySecret);
    this.hashResult = data.toString();
  }
}
